import { WebSocketServer } from 'ws'
import { createBirpc } from 'birpc'
import type { ClientFunctions, ServerFunctions } from './types'

const serverFunctions: ServerFunctions = {
  hey(name: string) {
    return Promise.resolve(`Hey ${name} from server`)
  },
}

export const wss = new WebSocketServer({ port: 8081 })

wss.on('connection', async (ws) => {
  const rpc = createBirpc<ClientFunctions, ServerFunctions>(serverFunctions, {
    post: (data) => ws.send(data),
    on: (fn) => ws.on('message', fn),
    serialize: (v) => JSON.stringify(v),
    deserialize: (v) => JSON.parse(v),
  })

  await rpc.hi('Bitbench')

  ws.on('error', console.error)

  ws.on('message', function message(data) {
    console.log('received: %s', data)
  })
})

wss.on('listening', () => {
  console.log('Listening on port 8081')
})
