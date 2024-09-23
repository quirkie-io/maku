import { createBirpc } from 'birpc'
import type { ClientFunctions, ServerFunctions } from './types'
import { WebSocket } from 'ws'

const ws = new WebSocket('ws://127.0.0.1:8081')

const clientFunctions: ClientFunctions = {
  hi(name: string) {
    return Promise.resolve(`Hi ${name} from client`)
  },
}

export const rpcClient = createBirpc<ServerFunctions, ClientFunctions>(clientFunctions, {
  post: (data) => ws.send(data),
  on: (data) => ws.on('message', data),
  serialize: (v) => JSON.stringify(v),
  deserialize: (v) => JSON.parse(v),
})

ws.on('open', async () => {
  console.log('Connected to Bitbench')

  rpcClient.hey('Bitbench').then((res) => console.log(res))
})
