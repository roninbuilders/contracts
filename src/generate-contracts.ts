import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'
import { parseAbi, type Abi } from 'abitype'
import PQueue from 'p-queue'
import type { Contract } from './contract'
import { formatAbi } from 'abitype'
import { generateIndex } from './generate-index'

// Increased concurrency settings for better parallel processing
const QUEUE_CONCURRENCY = 100
const FETCH_CONCURRENCY = 20
const RONIN_EXPLORER_API_URL = 'https://explorer-kintsugi.roninchain.com/v2/2020/'
const CONTRACTS_PER_PAGE = 1000
const FILE_WRITE_BATCH_SIZE = 200
const TEMP_PAGE_LIMIT = 100 // Temporal limit for testing
const MAX_CONTRACT_RETRIES = 3
const PROXY_CACHE_TTL = 3600000 // 1 hour in milliseconds

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
	private filteredCount = 0
	private startTime = Date.now()
	private failedContracts: Array<{ address: string; error: string; retryCount: number }> = []
	private allContracts: ContractItem[] = []
	private readonly preserveExisting: boolean
	private proxyAbiCache = new Map<string, Abi | undefined>()
	private existingContractsCache = new Map<number, string>()
	private lastProgressUpdate = 0

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

		const now = Date.now()
		// Only update progress every 2 seconds to reduce overhead
		if (now - this.lastProgressUpdate < 2000) return
		this.lastProgressUpdate = now

		const elapsed = (Date.now() - this.startTime) / 1000
		const totalProcessed = this.processedCount + this.failedCount
		const progress = this.totalContracts > 0 ? Math.min(100, (totalProcessed / this.totalContracts) * 100) : 0
		const rate = elapsed > 0 ? this.processedCount / elapsed : 0

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
			`  - Filtered: ${this.filteredCount}`,
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
				this.filteredCount++
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
					this.filteredCount++
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
			await new Promise((resolve) => setTimeout(resolve, 1000 * Math.min(retryCount + 1, 3)))
			return this.fetchAbi(contractAddress, retryCount + 1)
		}
	}

	// Add new method to fetch and cache proxy ABIs
	async fetchProxyAbi(proxyAddress: string): Promise<Abi | undefined> {
		if (this.proxyAbiCache.has(proxyAddress)) {
			if (process.env.DEBUG) {
				console.log(`[CACHE] Using cached ABI for proxy: ${proxyAddress}`)
			}
			return this.proxyAbiCache.get(proxyAddress)
		}

		const abi = await this.fetchAbi(proxyAddress)
		this.proxyAbiCache.set(proxyAddress, abi)
		return abi
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

	// Initialize existing contracts cache
	private async initializeExistingContractsCache(): Promise<void> {
		if (this.existingContractsCache.size > 0) return

		const dirPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'contracts')

		try {
			await fs.mkdir(dirPath, { recursive: true })
			const files = await fs.readdir(dirPath)

			// Process files in parallel for faster cache initialization
			const tasks = files
				.filter((file) => file.endsWith('.ts'))
				.map((file) => async () => {
					try {
						const filePath = path.join(dirPath, file)
						const content = await fs.readFile(filePath, 'utf8')
						const idMatch = content.match(/id:\s*(\d+)/)
						if (idMatch) {
							const contractId = parseInt(idMatch[1])
							this.existingContractsCache.set(contractId, file)
						}
					} catch (error) {
						// Skip files that can't be read
					}
				})

			await this.fetchQueue.addAll(tasks)
		} catch (error) {
			// Directory doesn't exist yet, cache will remain empty
		}
	}

	// Add new helper method to find existing contract by ID using cache
	private async findExistingContract(
		_dirPath: string,
		_files: string[],
		contractId: number,
	): Promise<string | undefined> {
		return this.existingContractsCache.get(contractId)
	}

	// Helper method to extract existing contract data
	private async getExistingContractData(
		filePath: string,
	): Promise<{ is_proxy: boolean; proxy_to: string | false } | null> {
		try {
			const content = await fs.readFile(filePath, 'utf8')

			const isProxyMatch = content.match(/is_proxy:\s*(true|false)/)
			const proxyToMatch = content.match(/proxy_to:\s*(?:'([^']+)'|false)/)

			if (isProxyMatch) {
				const is_proxy = isProxyMatch[1] === 'true'
				const proxy_to = proxyToMatch ? proxyToMatch[1] || false : false
				return { is_proxy, proxy_to }
			}
		} catch (error) {
			if (process.env.DEBUG) {
				console.warn(`Failed to read existing contract data: ${error}`)
			}
		}
		return null
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

	async processContract(item: ContractItem, retryCount = 0): Promise<void> {
		const maxRetries = MAX_CONTRACT_RETRIES
		const retryDelay = 500 * Math.min(Math.pow(2, retryCount), 4) // Faster exponential backoff, capped at 2s

		// Sanitize names before transforming
		const sanitizedDisplayName = this.sanitizeString(item.display_name || item.contract_name || '')
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

			let existingData: { is_proxy: boolean; proxy_to: string | false } | null = null

			// Enhanced logic for existing contracts
			if (existingFile && this.preserveExisting) {
				if (process.env.DEBUG) {
					console.log(`Preserving existing contract: ${existingFile}`)
				}
				this.skippedCount++
				this.logProgress()
				return
			}

			// For existing contracts, check if proxy data has actually changed
			if (existingFile) {
				const existingPath = path.join(dirPath, existingFile)
				existingData = await this.getExistingContractData(existingPath)

				if (existingData) {
					// Skip if proxy status and proxy_to haven't changed
					const proxyUnchanged =
						existingData.is_proxy === item.is_proxy && existingData.proxy_to === (item.proxy_to || false)

					if (proxyUnchanged && !item.is_proxy) {
						if (process.env.DEBUG) {
							console.log(`Skipping unchanged non-proxy contract: ${existingFile}`)
						}
						this.skippedCount++
						this.logProgress()
						return
					}
				}
			}

			const abi: Abi | undefined = await this.fetchAbi(item.address)
			let proxyAbi: Abi | undefined

			// If it's a proxy, fetch the proxy ABI (this will be cached)
			const resolvedProxyTo = item.proxy_to || false
			if (item.is_proxy && resolvedProxyTo) {
				proxyAbi = await this.fetchProxyAbi(resolvedProxyTo as string)
			}

			// Only skip if abi is undefined, allow empty arrays to pass through
			if (abi === undefined) {
				if (process.env.DEBUG) {
					console.warn(`Skipping contract ${item.address} due to missing ABI`)
				}
				this.skippedCount++
				this.logProgress()
				return
			}

			const contract: Contract = {
				id: item.id,
				address: item.address,
				contract_name: item.contract_name,
				display_name: item.display_name,
				is_deprecated: item.is_deprecated,
				is_proxy: item.is_proxy,
				proxy_to: resolvedProxyTo,
				created_at: item.created_at,
				abi,
				proxy_abi: proxyAbi,
			}

			await this.generateContractFile(contract, baseName)

			// Increment the processed count only when we've successfully processed a contract
			this.processedCount++
			this.logProgress()
		} catch (error) {
			// Retry logic
			if (retryCount < maxRetries) {
				if (process.env.DEBUG) {
					console.warn(`Retrying contract ${item.address} (attempt ${retryCount + 1}/${maxRetries}): ${error}`)
				}
				await new Promise((resolve) => setTimeout(resolve, retryDelay))
				return this.processContract(item, retryCount + 1)
			}

			// Max retries exceeded
			this.failedCount++
			this.failedContracts.push({
				address: item.address,
				error: error instanceof Error ? error.message : String(error),
				retryCount,
			})
			this.logProgress()
			if (process.env.DEBUG) {
				console.error(`Failed to process contract ${item.address} after ${retryCount} retries: ${error}`)
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

			// Initialize existing contracts cache for faster lookups
			console.log('📂 Initializing existing contracts cache...')
			await this.initializeExistingContractsCache()

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
				this.failedContracts.forEach(({ address, error, retryCount }) => {
					console.log(`- ${address}: ${error} (retried ${retryCount} times)`)
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
