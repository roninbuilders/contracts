import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function generateIndex() {
	const contractsDir = path.join(__dirname, 'contracts')
	const contracts = (await readdir(contractsDir))
		.filter((file) => file.endsWith('.ts'))
		.map((file) => file.replace('.ts', ''))
		.sort()

	// Generate main index file with named exports
	const mainIndex = [
		'// This file is auto-generated. Do not edit manually.',
		"export type { Contract } from './contract'",
		"export type { Abi } from 'abitype'\n",
		...contracts.map((contract) => `export { default as ${contract.toUpperCase()} } from './contracts/${contract}'`),
		'', // Empty line at end
	].join('\n')

	await writeFile(path.join(__dirname, 'index.ts'), mainIndex, 'utf8')
	console.log(`✅ Generated index with ${contracts.length} contracts`)
}

// Export for use in other modules
export { generateIndex }
