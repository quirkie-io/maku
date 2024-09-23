import path from 'path'
import { rakeDb } from 'rake-db'
import { config } from './config'

console.log(path.resolve(__dirname, 'changes'))

export const change = rakeDb(
  { databaseURL: config.url },
  {
    migrationsPath: path.resolve(__dirname, 'changes'),
    commands: {
      async seed() {
        const { seed } = await import('./seed')
        await seed()
      },
    },
  },
)
