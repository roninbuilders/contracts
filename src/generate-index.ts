import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function generateIndex() {
	const mainIndex = [
		'// This file is auto-generated. Do not edit manually.',
		'// Named exports are no longer supported to ensure optimal bundle size.',
		"export type { Contract } from './contract'",
		"export type { Abi } from 'abitype'",
		'', // Empty line at end
	].join('\n')

	await writeFile(path.join(__dirname, 'index.ts'), mainIndex, 'utf8')
}

// Export for use in other modules
export { generateIndex }
