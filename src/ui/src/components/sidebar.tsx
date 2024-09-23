import { Gauge, Play, Settings } from 'lucide-react'
import { Separator } from './separator'
import { Input } from './input'
import icon from '../assets/icon.svg'

export const Sidebar = () => {
  return (
    <div className="h-screen hidden md:flex md:flex-col md:sticky top-0 bg-background px-6 pt-8 text-sidebar-foreground">
      <span className="flex gap-2 items-center justify-between">
        <span className="flex gap-3">
          <img src={icon} alt="Māku logo" className="w-10 h-10" />
          <span>
            <span>Māku</span>
            <p className="text-xs text-left text-gray-400 leading-none tracking-wide">
              by{' '}
              <a href="https://www.sqala.tech" className="hover:text-white" target="_blank" rel="noreferrer">
                quirkie-io on github
              </a>
            </p>
          </span>
        </span>
        <span className="flex gap-3">
          <Settings strokeWidth={1.5} className="text-zinc-400 hover:text-purple-400  cursor-pointer " size={20} />
        </span>
      </span>

      <Separator className="my-6" />
      <Input placeholder="Search..." />

      <div className="flex gap-2 mt-8 mb-6 text-zinc-900 dark:text-zinc-300">
        <Gauge />
        <h5 className="font-semibold ">Benchmarks</h5>
      </div>

      <ul className="space-y-3">
        <li className="flex justify-between items-center">
          <a
            className="hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
            href="/docs/aspect-ratio"
          >
            Mapper vs AutoHydrate
          </a>
          <Play
            strokeWidth={1.5}
            className="text-zinc-700 hover:text-purple-600  cursor-pointer fill-zinc-700 hover:fill-purple-600"
            size={16}
          />
        </li>
        <li className="flex justify-between items-center">
          <a
            className="hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
            href="/docs/aspect-ratio"
          >
            Express vs Elysiajs
          </a>
          <Play
            strokeWidth={1.5}
            className="text-zinc-700 hover:text-purple-600  cursor-pointer fill-zinc-700 hover:fill-purple-600"
            size={16}
          />
        </li>
        <li className="flex justify-between items-center">
          <a
            className="hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
            href="/docs/aspect-ratio"
          >
            For Loops
          </a>
          <Play
            strokeWidth={1.5}
            className="text-zinc-700 hover:text-purple-600  cursor-pointer fill-zinc-700 hover:fill-purple-600"
            size={16}
          />
        </li>
        <li className="flex justify-between items-center">
          <a
            className="hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
            href="/docs/aspect-ratio"
          >
            pg vs postgres
          </a>
          <Play
            strokeWidth={1.5}
            className="text-zinc-700 hover:text-purple-600  cursor-pointer fill-zinc-700 hover:fill-purple-600"
            size={16}
          />
        </li>
      </ul>
    </div>
  )
}
