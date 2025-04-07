import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['esm', 'cjs'],
	dts: true,
	splitting: true,
	clean: true,
	treeshake: {
		preset: 'smallest',
	},
	minify: true,
	metafile: true,
	outExtension({ format }) {
		return {
			js: format === 'cjs' ? '.cjs' : '.js',
		}
	},
})
