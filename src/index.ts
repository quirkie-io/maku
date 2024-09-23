#!/usr/bin/env node
import { Command } from '@commander-js/extra-typings'
import packageJson from '../package.json'
import { stop, stopByType } from './spinner'
import { run } from './commands/run-command'
import picocolors from 'picocolors'

const program = new Command()
  .option('-v, --verbose')
  .name('Māku CLI')
  .description('Benchmark your code with ease')
  .version(packageJson.version)

// Commands
program.addCommand(run)

async function main() {
  // await services.load()
  await program.parseAsync()
}

console.log() // log a new line so there is a nice space
header()
main()

process.on('unhandledRejection', (err: Error) => {
  const debug = program.opts().verbose
  if (debug) {
    console.error(err.stack)
  }
  stopByType('error')
  stop()

  program.error(picocolors.red(err.message), { exitCode: 1 })
})

function header() {
  console.log(picocolors.magenta('███╗   ███╗ █████╗ ██╗  ██╗██╗   ██╗'))
  console.log(picocolors.magenta('████╗ ████║██╔══██╗██║ ██╔╝██║   ██║'))
  console.log(picocolors.magenta('██╔████╔██║███████║█████╔╝ ██║   ██║'))
  console.log(picocolors.magenta('██║╚██╔╝██║██╔══██║██╔═██╗ ██║   ██║'))
  console.log(picocolors.magenta('██║ ╚═╝ ██║██║  ██║██║  ██╗╚██████╔╝'))
  console.log(picocolors.magenta('╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝'))
}
