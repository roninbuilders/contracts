import { writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function generateIndex() {
	const mainIndex = [
		'// This file is auto-generated. Do not edit manually.',
		'// Named exports are no longer supported to ensure optimal bundle size.',
		"export type { Contract } from './contract'",
		"export type { Abi } from 'abitype'",
		'', // Empty line at end
	].join('\n')

	await writeFile(join(__dirname, 'index.ts'), mainIndex, 'utf8')
}

// Export for use in other modules
export { generateIndex }
