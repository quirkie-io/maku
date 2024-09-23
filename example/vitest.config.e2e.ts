import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  root: '.',
  test: {
    name: 'e2e',
    include: ['e2e/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    environment: 'node',
    reporters: ['default', 'vitest-sonar-reporter'],
    outputFile: {
      'vitest-sonar-reporter': './coverage/sonar-report.xml',
    },
    setupFiles: ['dotenv/config'],
  },
  plugins: [tsconfigPaths({ root: '.' })],
})
