import { Command } from '@commander-js/extra-typings'
import { bench, suite } from '../maku'
import { hrtimeNow } from 'tinybench'

export const run = new Command('run').description('Run benchmarks').action(() => {
  // suite('add', () => {
  bench('add', () => 1 + 1)
  bench('add2', () => 1 + 1)
  bench('add3', () => 1 + 1)
  bench('add4', () => 1 + 1)
  // })
})
