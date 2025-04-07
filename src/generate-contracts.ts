import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'
import { parseAbi, type Abi } from 'abitype'
import PQueue from 'p-queue'
import type { Contract } from './contract'
import { formatAbi } from 'abitype'
import { generateIndex } from './generate-index'

// Increased concurrency settings for better parallel processing
const QUEUE_CONCURRENCY = 50
const FETCH_CONCURRENCY = 10
const RONIN_EXPLORER_API_URL = 'https://explorer-kintsugi.roninchain.com/v2/2020/'
const CONTRACTS_PER_PAGE = 1000
const FILE_WRITE_BATCH_SIZE = 200
const TEMP_PAGE_LIMIT = 100 // Temporal limit for testing

export interface ExplorerResponse<T> {
	message: string
	result: T
	status: boolean
}

export interface PaginatedResult {
	hasNext?: boolean
	limit?: number
	page?: number
	total?: number
	items?: ContractItem[]
	output?: {
		abi: string[]
	}
}

export interface ContractItem {
	id: number
	address: `0x${string}`
	contract_name: string
	display_name: string
	is_deprecated: boolean
	is_proxy: boolean
	proxy_to: string
	created_at: number
}

export type ContractsResponse = PaginatedResult & {
	items: ContractItem[]
}

export type AbiResponse = PaginatedResult & {
	output: {
		abi: object[]
	}
}

export class ContractService {
	private readonly queue: PQueue
	private readonly fetchQueue: PQueue
	private processedCount = 0
	private skippedCount = 0
	private failedCount = 0
	private totalContracts = 0
	private startTime = Date.now()
	private failedContracts: Array<{ address: string; error: string }> = []
	private allContracts: ContractItem[] = []
	private readonly preserveExisting: boolean

	constructor(concurrency = QUEUE_CONCURRENCY, fetchConcurrency = FETCH_CONCURRENCY, preserveExisting = false) {
		this.queue = new PQueue({ concurrency })
		this.fetchQueue = new PQueue({ concurrency: fetchConcurrency })
		this.queue.on('active', () => this.logProgress())
		this.preserveExisting = preserveExisting

		// Single cleanup handler for all scenarios
		const cleanup = (error?: Error) => {
			this.cleanupProgress()
			if (error) {
				console.error('Fatal error:', error)
				process.exit(1)
			}
			process.exit(0)
		}

		process.on('exit', () => cleanup())
		process.on('SIGINT', () => cleanup())
		process.on('SIGTERM', () => cleanup())
		process.on('uncaughtException', (error) => cleanup(error))
	}

	private logProgress() {
		if (this.totalContracts === 0) return

		const elapsed = (Date.now() - this.startTime) / 1000
		const totalProcessed = this.processedCount + this.skippedCount + this.failedCount
		const progress = Math.min(100, (totalProcessed / this.totalContracts) * 100)
		const rate = this.processedCount / elapsed

		// Format a progress line that works in both CI and terminals
		const progressLine = this.formatProgressLine(progress, rate, this.failedCount)

		// Check if running in CI (GitHub Actions)
		const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true'

		if (isCI) {
			// In CI environments, log each milestone progress as a new line
			if (this.processedCount % 100 === 0 || totalProcessed === this.totalContracts) {
				console.log(progressLine)
			}
		} else {
			// In terminals, use carriage return for a single updating line
			process.stdout.write('\r\x1b[K' + progressLine)
		}
	}

	// Format progress line for display
	private formatProgressLine(progress: number, rate: number, failedCount: number): string {
		const barLength = 30
		const completed = Math.max(0, Math.round((progress / 100) * barLength))
		const remaining = Math.max(0, barLength - completed)
		const bar = '█'.repeat(completed) + '░'.repeat(remaining)

		return (
			`[${bar}] ${progress.toFixed(1)}% | ${this.processedCount}/${this.totalContracts} | ` +
			`${rate.toFixed(1)} contracts/s | Failed: ${failedCount}`
		)
	}

	// Generate final stats summary
	private generateSummary(): string {
		const elapsed = (Date.now() - this.startTime) / 1000
		const elapsedFormatted =
			elapsed > 60 ? `${Math.floor(elapsed / 60)}m ${Math.floor(elapsed % 60)}s` : `${Math.floor(elapsed)}s`

		return [
			`✅ Processed ${this.processedCount} contracts in ${elapsedFormatted}`,
			`📊 Statistics:`,
			`  - Total: ${this.totalContracts}`,
			`  - Processed: ${this.processedCount}`,
			`  - Skipped: ${this.skippedCount}`,
			`  - Failed: ${this.failedCount}`,
		].join('\n')
	}

	// Add cleanup method
	private cleanupProgress() {
		// For non-CI environments, clear the current line
		const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true'
		if (!isCI) {
			process.stdout.write('\r\x1b[K')
		}

		// Show final summary regardless of environment
		console.log(this.generateSummary())
	}

	async fetchContracts(page: number): Promise<ContractsResponse> {
		const url = `${RONIN_EXPLORER_API_URL}contracts?ps=${CONTRACTS_PER_PAGE}&p=${page}`

		try {
			const response = await fetch(url, {
				headers: {
					accept: 'application/json',
					'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
					'accept-language': 'en-US,en;q=0.9',
					'cache-control': 'no-cache',
					'sec-fetch-dest': 'empty',
					'sec-fetch-mode': 'cors',
					'sec-fetch-site': 'same-origin',
					Referer: 'https://app.roninchain.com/contracts',
					Origin: 'https://app.roninchain.com',
				},
			})

			if (!response.ok) {
				// Handle 403 with alternative endpoint
				if (response.status === 403) {
					// process.stdout.write('\n🔄 Using alternative API endpoint...\n')
					return this.fetchContractsAlternative(page)
				}
				throw new Error(`HTTP Error: ${response.status}`)
			}

			const data = (await response.json()) as ExplorerResponse<ContractsResponse>
			if (!data.status || !data.result) {
				throw new Error('Invalid API response')
			}

			return data.result
		} catch (error) {
			// process.stdout.write(`\n❌ Error fetching page ${page}: ${error}\n`)
			throw error
		}
	}

	// New method to fetch all contracts in parallel
	async fetchAllContracts(): Promise<ContractItem[]> {
		// First get total pages
		const firstPage = await this.fetchContracts(1)
		const totalPages = Math.min(Math.ceil((firstPage.total || 1) / firstPage.items.length), TEMP_PAGE_LIMIT)

		// Track unique contracts by address to prevent duplicates
		const uniqueContracts = new Map<string, ContractItem>()

		// Add first page results that aren't the MainToken to our collection
		for (const item of firstPage.items) {
			if (item.contract_name !== 'MainToken' && item.display_name !== 'Main Token') {
				uniqueContracts.set(item.address, item)
			} else {
				this.skippedCount++
			}
		}

		if (totalPages <= 1) {
			return Array.from(uniqueContracts.values())
		}

		// Fetch remaining pages in parallel with concurrency control
		const tasks = Array.from({ length: totalPages - 1 }, (_, i) => async () => {
			const pageNum = i + 2 // Start from page 2
			return this.fetchContracts(pageNum)
		})

		// Use fetchQueue to control concurrency
		const pageResults = await this.fetchQueue.addAll(tasks)

		// Process and merge results, ensuring no duplicates
		for (const page of pageResults) {
			for (const item of page.items) {
				if (item.contract_name !== 'MainToken' && item.display_name !== 'Main Token') {
					uniqueContracts.set(item.address, item)
				} else {
					this.skippedCount++
				}
			}
		}

		return Array.from(uniqueContracts.values())
	}

	async fetchContractsAlternative(page: number): Promise<ContractsResponse> {
		const url = `https://api.roninchain.com/v1/contracts?page=${page}&size=${CONTRACTS_PER_PAGE}`
		const response = await fetch(url, {
			headers: {
				accept: 'application/json',
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
			},
		})

		if (!response.ok) {
			throw new Error(`Alternative API endpoint failed: ${response.status} ${response.statusText}`)
		}

		const data = await response.json()
		return {
			items: data.results || [],
			total: data.total || 0,
			hasNext: data.hasNext || false,
		}
	}

	async fetchAbi(contractAddress: string, retryCount = 0): Promise<Abi | undefined> {
		try {
			const url = `${RONIN_EXPLORER_API_URL}contract/${contractAddress}/abi`
			const response = await fetch(url, {
				headers: { accept: 'application/json', 'cache-control': 'no-cache' },
			})

			if (response.status === 404) return undefined
			if (!response.ok) throw new Error(`Failed to fetch ABI: ${response.status}`)

			const data = (await response.json()) as ExplorerResponse<AbiResponse>
			let rawAbi = data.result?.output?.abi

			// Handle string ABI format
			try {
				// If rawAbi is a string array, try to parse it properly
				if (Array.isArray(rawAbi)) {
					return rawAbi as Abi
				}

				// If it's a JSON string, parse it
				if (typeof rawAbi === 'string') {
					const jsonAbi = JSON.parse(rawAbi)
					return jsonAbi as Abi
				}

				return rawAbi as Abi
			} catch (error) {
				console.warn(`⚠️ Invalid ABI for contract ${contractAddress} - skipping ABI parsing: ${error}`)
				return [] as unknown as Abi
			}
		} catch (error) {
			if (retryCount >= 5) throw error
			await new Promise((resolve) => setTimeout(resolve, 10000))
			return this.fetchAbi(contractAddress, retryCount + 1)
		}
	}

	sanitizeString(str: string): string {
		return str
			.replace(/'/g, '') // Remove single quotes
			.replace(/"/g, '') // Remove double quotes
			.replace(/\\/g, '') // Remove backslashes
			.replace(/\n/g, ' ') // Replace newlines with spaces
			.replace(/\r/g, ' ') // Replace carriage returns with spaces
			.trim() // Remove leading/trailing whitespace
	}

	private async generateContractFile(contract: Contract, baseName: string): Promise<void> {
		const dirPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'contracts')
		await fs.mkdir(dirPath, { recursive: true })

		// Check if file with same contract ID exists first
		const existingFiles = await fs.readdir(dirPath)
		const existingFile = await this.findExistingContract(dirPath, existingFiles, contract.id)

		let finalFileName: string
		if (existingFile) {
			// Use existing filename if contract ID matches
			finalFileName = existingFile

			// Compare existing contract content with new one
			const existingContent = await fs.readFile(path.join(dirPath, existingFile), 'utf8')
			const newContent = this.generateContractContent(contract)

			// Skip if content hasn't changed or preserveExisting is true
			if (existingContent.trim() === newContent.trim() || this.preserveExisting) {
				if (process.env.DEBUG) {
					console.log(`Skipping ${this.preserveExisting ? 'existing' : 'unchanged'} contract: ${finalFileName}`)
				}
				return
			}
		} else {
			// No existing contract with same ID, check for name conflicts
			const matchingFiles = existingFiles.filter((file) => file.startsWith(baseName) && file.endsWith('.ts'))

			if (matchingFiles.length > 0) {
				const addressSuffix = contract.address.slice(-8).toLowerCase()
				finalFileName = `${baseName}_${addressSuffix}.ts`
			} else {
				finalFileName = `${baseName}.ts`
			}
		}

		// Generate new content
		const content = this.generateContractContent(contract)
		const filePath = path.join(dirPath, finalFileName)
		await fs.writeFile(filePath, content, 'utf8')

		if (process.env.DEBUG) {
			console.log(`${existingFile ? 'Updated' : 'Generated'} file: ${finalFileName}`)
		}
	}

	// Helper method to generate contract content
	private generateContractContent(contract: Contract): string {
		const sanitizedContract = {
			...contract,
			contract_name: this.sanitizeString(contract.contract_name),
			display_name: this.sanitizeString(contract.display_name),
		}

		const processAbi = (abi: typeof contract.abi): string => {
			if (!abi || !Array.isArray(abi) || abi.length === 0) return '[]'
			try {
				const formattedAbi = formatAbi(abi)
				const parsedAbi = parseAbi(formattedAbi)
				return JSON.stringify(parsedAbi, null, 2)
			} catch (error) {
				if (process.env.DEBUG) {
					console.warn(`⚠️ Invalid ABI for contract ${contract.id} - skipping ABI formatting: ${error}`)
				}
				return '[]'
			}
		}

		return [
			`import type { Contract } from '@/contract'`,
			`import type { Abi } from 'abitype'`,
			``,
			`const contract = {`,
			`  id: ${sanitizedContract.id},`,
			`  address: '${sanitizedContract.address}' as const,`,
			`  contract_name: '${sanitizedContract.contract_name}',`,
			`  display_name: '${sanitizedContract.display_name}',`,
			`  is_deprecated: ${sanitizedContract.is_deprecated},`,
			`  is_proxy: ${sanitizedContract.is_proxy},`,
			`  proxy_to: ${sanitizedContract.proxy_to === false ? 'false' : `'${sanitizedContract.proxy_to}'`},`,
			`  created_at: ${sanitizedContract.created_at},`,
			`  abi: ${processAbi(contract.abi)} as const satisfies Abi${contract.proxy_abi ? ',' : ''}`,
			contract.proxy_abi ? `  proxy_abi: ${processAbi(contract.proxy_abi)} as const satisfies Abi` : '',
			`} as const satisfies Contract`,
			``,
			`export default contract`,
			``,
		]
			.filter(Boolean)
			.join('\n')
	}

	// Add new helper method to find existing contract by ID
	private async findExistingContract(
		dirPath: string,
		files: string[],
		contractId: number,
	): Promise<string | undefined> {
		for (const file of files) {
			if (!file.endsWith('.ts')) continue

			try {
				const filePath = path.join(dirPath, file)
				const content = await fs.readFile(filePath, 'utf8')

				// Check if the file contains the contract ID
				const idMatch = content.match(/id:\s*(\d+)/)
				// @ts-expect-error - type mismatch
				if (idMatch && parseInt(idMatch[1]) === contractId) {
					return file
				}
			} catch (error) {
				// Skip files that can't be read
				continue
			}
		}
		return undefined
	}

	transformContractName(name: string, id?: number): string {
		// Handle special cases first
		if (!name) return ''

		// Convert to snake case one step at a time
		let result = name
			// Insert underscore before uppercase letters in camelCase
			.replace(/([a-z0-9])([A-Z])/g, '$1_$2')
			// Insert underscore before numbers
			.replace(/([a-zA-Z])(\d+)/g, '$1_$2')
			// Convert everything to lowercase
			.toLowerCase()
			// Replace any non-alphanumeric character with underscore
			.replace(/[^a-z0-9]+/g, '_')
			// Remove leading and trailing underscores
			.replace(/^_+|_+$/g, '')

		// Append ID if provided
		if (id !== undefined) {
			result = `${result}_${id}`
		}

		return result
	}

	async processContract(item: ContractItem): Promise<void> {
		// Sanitize names before transforming
		const sanitizedDisplayName = this.sanitizeString(item.display_name || item.contract_name)
		const baseName = this.transformContractName(sanitizedDisplayName)
		if (!baseName) {
			this.skippedCount++
			this.logProgress() // Update progress when skipping
			return
		}

		try {
			// Check if contract already exists
			const dirPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'contracts')
			await fs.mkdir(dirPath, { recursive: true })
			const existingFiles = await fs.readdir(dirPath)
			const existingFile = await this.findExistingContract(dirPath, existingFiles, item.id)

			// If contract exists and it's not a proxy, don't fetch ABI again
			if (existingFile) {
				if (this.preserveExisting || !item.is_proxy) {
					if (process.env.DEBUG) {
						console.log(`Skipping ABI fetch for existing contract: ${existingFile}`)
					}
					this.skippedCount++
					this.logProgress() // Update progress when skipping
					return
				}
			}

			let abi: Abi | undefined = await this.fetchAbi(item.address)
			let proxyAbi: Abi | undefined
			// Try fetching proxy ABI if it's a proxy contract
			if (item.is_proxy) {
				proxyAbi = await this.fetchAbi(item.proxy_to)
			}

			// Only skip if abi is undefined, allow empty arrays to pass through
			if (abi === undefined) {
				if (process.env.DEBUG) {
					// process.stdout.write(`\n⚠️  Skipping contract ${item.address} due to missing ABI\n`)
				}
				this.skippedCount++
				this.logProgress() // Update progress when skipping
				return
			}

			const contract: Contract = {
				id: item.id,
				address: item.address,
				contract_name: item.contract_name,
				display_name: item.display_name,
				is_deprecated: item.is_deprecated,
				is_proxy: item.is_proxy,
				proxy_to: item.proxy_to || false,
				created_at: item.created_at,
				abi,
				proxy_abi: proxyAbi,
			}

			await this.generateContractFile(contract, baseName)

			// Increment the processed count only when we've successfully processed a contract
			this.processedCount++
			this.logProgress()
		} catch (error) {
			this.failedCount++
			this.failedContracts.push({
				address: item.address,
				error: error instanceof Error ? error.message : String(error),
			})
			this.logProgress() // Update progress when failing
			if (process.env.DEBUG) {
				// process.stdout.write(`\n❌ Failed to process contract ${item.address}: ${error}\n`)
			}
		}
	}

	// Optimized version to process a batch of contracts with better concurrency control
	async processBatch(contracts: ContractItem[]): Promise<void> {
		// Use our queue with proper concurrency limits
		const tasks = contracts.map((contract) => () => this.processContract(contract))
		await this.queue.addAll(tasks)
	}

	// Modified to no longer remove implementation files
	async removeImplementationFiles(): Promise<number> {
		// process.stdout.write('\n🧹 No longer removing implementation files...\n')
		return 0 // Return 0 as we're not removing any files
	}

	// Helper method to chunk arrays
	private _chunkArray<T>(array: T[], size: number): T[][] {
		const chunks: T[][] = []
		for (let i = 0; i < array.length; i += size) {
			chunks.push(array.slice(i, i + size))
		}
		return chunks
	}

	async update(): Promise<void> {
		try {
			console.log('🔍 Fetching contract list...')
			this.allContracts = await this.fetchAllContracts()

			if (!this.allContracts.length) {
				throw new Error('No valid contracts found after filtering')
			}

			// Set the actual count of contracts to process
			this.totalContracts = this.allContracts.length
			console.log(`📦 Processing ${this.totalContracts} contracts...`)

			const batches = this._chunkArray(this.allContracts, FILE_WRITE_BATCH_SIZE)
			for (const batch of batches) {
				await this.processBatch(batch)
			}

			// Check if processed count exceeds total contracts (this shouldn't happen)
			if (this.processedCount > this.totalContracts) {
				console.warn(
					`⚠️ Warning: Processed count (${this.processedCount}) exceeded initial contract count (${this.totalContracts}). This could indicate duplicates in the API response.`,
				)
			}

			await generateIndex()

			this.cleanupProgress()

			if (this.failedCount > 0) {
				console.log('\nFailed contracts:')
				this.failedContracts.forEach(({ address, error }) => {
					console.log(`- ${address}: ${error}`)
				})
			}
		} catch (error) {
			this.cleanupProgress()
			throw error
		}
	}
}

const main = async () => {
	try {
		console.log('Initializing contract service...')
		const preserveExisting = process.argv.includes('--preserve-existing')
		const service = new ContractService(QUEUE_CONCURRENCY, FETCH_CONCURRENCY, preserveExisting)
		await service.update()
	} catch (error) {
		console.error('Fatal error:', error)
		process.exit(1)
	}
}

main().catch((error) => {
	console.error('Unhandled error:', error)
	process.exit(1)
})
