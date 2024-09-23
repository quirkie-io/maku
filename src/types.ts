export type ClientFunctions = {
  hi: (name: string) => Promise<string>
}

export type ServerFunctions = {
  hey: (name: string) => Promise<string>
}
