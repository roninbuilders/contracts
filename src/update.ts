import { Contract } from './contract'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs'
import { Abi } from 'abitype'
import { default as PQueue } from 'p-queue'

const QUEUE_CONCURRENCY = 3
const RONIN_EXPLORER_API_URL = process.env.RONIN_EXPLORER_API_URL
if (!RONIN_EXPLORER_API_URL) {
	throw new Error('RONIN_EXPLORER_API_URL is not set')
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

interface BaseResult {
	hasNext?: boolean
	limit?: number
	page?: number
	total?: number
}

interface Response<T extends BaseResult> {
	message: string
	result: T
	status: boolean
}
interface Item {
	id: number
	address: `0x${string}`
	contract_name: string
	tag_name: string
	creator: string
	decimals: number
	icon: string
	at_tx: string
	at_block: number
	is_deprecated: boolean
	is_proxy: boolean
	proxy_to: string
	token_name: string
	token_symbol: string
	token_type: string
	timestamp: number
	is_third_party: boolean
	total_transaction: number
	is_restricted_abi: boolean
	is_restricted_src: boolean
	created_at: number
	is_fully_match: boolean
	is_verified_sourcify: boolean
	logic_contract_info: Record<string, unknown>
	is_logic: boolean
	display_name: string
	updated_at: number
	is_system_contract: boolean
}

interface ItemsResult extends BaseResult {
	items: Item[]
}

interface OutputResult extends BaseResult {
	output: {
		abi: readonly unknown[]
	}
}

const fetchContracts = async () => {
	const url = `${RONIN_EXPLORER_API_URL}contracts?ps=1000&p=1`
	const response = await fetch(url, {
		headers: {
			accept: 'application/json',
			'cache-control': 'no-cache',
		},
	})

	const data = (await response.json()) as Response<ItemsResult>
	return data.result.items
}
const fetchAbi = async (contractAddress: string, retryCount = 0): Promise<readonly unknown[] | Abi> => {
	const url = `${RONIN_EXPLORER_API_URL}contract/${contractAddress}/abi`

	try {
		const contracts = await fetch(url, {
			headers: {
				accept: 'application/json',
				'cache-control': 'no-cache',
			},
		})
		const data = (await contracts.json()) as Response<OutputResult>
		const response = data.result.output?.abi || false

		if (!response && data.message === 'API rate limit exceeded') {
			throw new Error('API rate limit exceeded')
		}

		console.log(`Successfully fetched ABI for contract ${contractAddress}`)

		return response
	} catch (error) {
		if (retryCount >= 5) {
			throw error
		}

		// Log the error and retry
		console.info(`Retrying ${contractAddress}: ${retryCount + 1}...`)

		// Wait for 10 seconds and try again
		await new Promise((resolve) => setTimeout(resolve, 10000))
		return await fetchAbi(contractAddress, retryCount + 1)
	}
}

function transformString(input: string): string {
	// Ensure the first letter is lowercase and handle sequences of uppercase letters
	let result = input.replace(/([A-Z]+)/g, (match, p1, offset) =>
		offset > 0 ? `_${p1.toLowerCase()}` : p1.toLowerCase(),
	)
	// Replace spaces and other non-alphanumeric characters with underscores
	result = result.replace(/\s+/g, '_')
	// Remove any consecutive underscores that might have been introduced by the replacement
	result = result.replace(/_+/g, '_')
	return result
}

const writeAbiToFile = async (
	address: `0x${string}`,
	name: string,
	abi: Abi | readonly unknown[],
	is_deprecated: boolean,
	created_at: number,
) => {
	try {
		const filename = transformString(name.replace(/[\s.'-]/g, '_'))
		const dirPath = path.join(__dirname, 'contracts')
		const filePath = path.join(dirPath, `${filename}.ts`)

		// Create the directory if it doesn't exist
		try {
			await fs.promises.access(dirPath)
		} catch {
			await fs.promises.mkdir(dirPath, { recursive: true })
		}

		// Check if the file already exists
		try {
			await fs.promises.access(filePath)

			// Import the existing contract and compare it with the new one
			try {
				const existingContract = (await import(filePath)).default as Contract<Abi | readonly unknown[]>
				const isUpdated = created_at > existingContract.created_at

				// If the contract is not updated or the ABI is not changed, return early
				if (!isUpdated) {
					return
				}
			} catch (importError) {
				console.error(`Error importing file ${filePath}: ${importError}`)
			}
		} catch {
			// File doesn't exist, do nothing
		}

		// Write the data to the file
		await fs.promises.writeFile(
			filePath,
			`import { Contract } from "@/contract";\n const abi = ${JSON.stringify(
				abi,
				null,
				2,
			)} as const;\nconst ${filename.toUpperCase()}:Contract<typeof abi> = { name: '${name}', address: '${address}', is_deprecated: ${is_deprecated}, created_at: ${created_at}, abi: abi};\nexport default ${filename.toUpperCase()};\n`,
		)
	} catch (error) {
		console.error(`Failed to write ABI to file: ${error}`)
	}
}

let failedCount = 0
const saveLocalFile = async (
	contractAddress: `0x${string}`,
	contractName: string,
	is_deprecated: boolean = false,
	created_at: number = 0,
) => {
	try {
		// Get the ABI from the API
		const abi = await fetchAbi(contractAddress)
		if (!abi) {
			failedCount++
			return // skip if the contract doesn't have an ABI yet
		}
		await writeAbiToFile(contractAddress, contractName, abi, is_deprecated, created_at)
	} catch (err) {
		console.error(err)
		failedCount++
	} finally {
		return
	}
}

const cleanNameString = (name: string) => {
	// remove any non-alphanumeric characters
	return name.replace(/[^a-zA-Z0-9\s]/g, '')
}

const processContract = async (apiContractItem: Item) => {
	const contractAddress = apiContractItem.address
	const contractName = cleanNameString(apiContractItem.display_name || apiContractItem.contract_name)
	if (!contractName.length) {
		// skip if the contract doesn't have a name yet
		return false
	}

	try {
		await saveLocalFile(contractAddress, contractName, apiContractItem.is_deprecated, apiContractItem.created_at)
		const dirPath = path.join(__dirname, 'contracts')
		const files = await fs.promises.readdir(dirPath)
		const indexFilePath = path.join(__dirname, 'index.ts')
		const indexFileContent = files
			.map((file) => {
				const filename = file.replace('.ts', '')
				return `export { default as ${filename.toLocaleUpperCase()} } from '@/contracts/${filename}';`
			})
			.join('\n')
		await fs.promises.writeFile(indexFilePath, indexFileContent)
	} catch (error) {
		console.error('Failed to process contract', contractAddress)
		console.error(error)
	} finally {
		return
	}
}

const updateAbis = async () => {
	try {
		const contracts = await fetchContracts()
		if (!contracts || contracts.length === 0) {
			throw new Error('No contracts found')
		}

		// Create a queue with a concurrency limit
		const queue = new PQueue({ concurrency: QUEUE_CONCURRENCY })

		// Add tasks to the queue
		contracts.forEach((contract) => {
			queue.add(() => processContract(contract))
		})

		// Wait for all tasks in the queue to finish
		await queue.onIdle()
	} catch (error) {
		// Handle error
		console.error('Failed to update ABIs')
		console.error(error)
	}
}

console.time('Update Abis time')
updateAbis()
	.then(() => {
		console.timeEnd('Update Abis time')
		process.exit(0)
	})
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
