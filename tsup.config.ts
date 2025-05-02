import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/contracts/**/*.ts'],
	format: ['esm', 'cjs'],
	dts: true,
	splitting: false,
	clean: true,
	treeshake: {
		preset: 'smallest',
	},
	minify: true,
	metafile: true,
	outDir: 'dist',
	outExtension({ format }) {
		return {
			js: format === 'cjs' ? '.cjs' : '.js',
		}
	},
})
