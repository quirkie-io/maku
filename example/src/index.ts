import { server } from './server'

const start = Date.now()

server.run().then(() => {
  const end = Date.now() - start
  console.log(`Application started in ${end}ms`)
})
