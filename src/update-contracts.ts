import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const fetchContracts = async () => {
	const url = 'https://explorer-kintsugi.roninchain.com/v2/2020/address'
	const response = await fetch(url, {
		headers: {
			accept: 'application/json, text/plain, */*',
			'cache-control': 'no-cache',
		},
	})
	const data = await response.json()
	return data.result?.items
}

const fetchAbi = async (contractAddress: string) => {
	const url = `https://explorer-kintsugi.roninchain.com/v2/2020/contract/${contractAddress}/abi`
	const response = await fetch(url, {
		headers: {
			accept: 'application/json, text/plain, */*',
			'cache-control': 'no-cache',
		},
	})
	const data = await response.json()
	return data.result?.output?.abi
}

const writeAbiToFile = (address: string, name: string, abi: any) => {
	const dirPath = path.join(__dirname, 'contracts')
	fs.mkdirSync(dirPath, { recursive: true }) // This will create the directory if it doesn't exist
	const filename = name.replace(/[\s.'-]/g, '_').toLowerCase()
	const filePath = path.join(dirPath, `${filename}.ts`)
	const contract = {
		name,
		address,
		abi,
	}
	fs.writeFileSync(filePath, `export const ${filename.toLocaleUpperCase()} = ${JSON.stringify(contract, null, 2)};`)
}

const updateAbis = async () => {
	console.log('Updating ABIs...')
	const contracts = await fetchContracts()
	for (const [index, contract] of Object.entries(contracts)) {
		break
		// get from object key
		const contractAddress = index
		const contractName = (contract as any).name
		if (!contractName) {
			// skip if the contract doesn't have a name
			continue
		}

		try {
			console.log(`Fetching ABI for ${contractName}...`)
			const abi = await fetchAbi(contractAddress)
			await new Promise((resolve) => setTimeout(resolve, 1000)) // wait 1 second to avoid rate limit
			if (!abi) {
				console.log(`ABI not found for ${contractName}`)
				continue
			}
			writeAbiToFile(contractAddress, contractName, abi)
		} catch (error) {
			console.error(error)
		}
	}

	// Update the index file with the new contracts list, like this
	console.log('Updating index file...')
	const dirPath = path.join(__dirname, 'contracts')
	const files = fs.readdirSync(dirPath)
	const indexFilePath = path.join(__dirname, 'index.ts')
	const indexFileContent = files
		.map((file) => {
			const filename = file.replace('.ts', '')
			return `export { ${filename.toLocaleUpperCase()} } from './contracts/${filename}';`
		})
		.join('\n')
	fs.writeFileSync(indexFilePath, indexFileContent)
}

updateAbis()
	.then(() => {
		console.log('Done!')
		process.exit(0)
	})
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
