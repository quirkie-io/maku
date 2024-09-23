import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  minify: false,
  minifySyntax: true,
  minifyWhitespace: false,
  minifyIdentifiers: true,
  clean: true,
  dts: true,
  banner: {
    js: `import { createRequire } from 'module'; const require = createRequire(import.meta.url);`,
  },
})
