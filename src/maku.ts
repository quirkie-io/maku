import { Bench as Tinybench, type Options } from 'tinybench'
import { loadingPromise } from './spinner'
import picocolors from 'picocolors'

const suites = new Map<string, Tinybench>()
let currentContext: { suiteName?: string } = {}

export async function suite(name: string, fn: () => void, options?: Options) {
  if (!suites.has(name)) suites.set(name, new Tinybench(options))

  currentContext.suiteName = name

  fn()
  const controller = new AbortController()
  const signal = controller.signal

  const bench = suites.get(currentContext.suiteName)
  if (!bench) throw new Error('Suite not found')

  bench.signal = signal

  await loadingPromise(
    async () => {
      await bench?.warmup()
      await bench?.run()

      console.log()
      console.table(bench?.table())
    },
    { message: 'Running benchmarks' },
  )

  currentContext = {}
}

export function bench(name: string, fn: () => void) {
  if (!currentContext.suiteName) {
    throw new Error('No suite found. Please use the suite function before bench.')
  }

  const suite = suites.get(currentContext.suiteName)
  suite?.add(name, fn)

  fn()
}
