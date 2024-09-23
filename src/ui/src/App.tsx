import { useState } from 'react'
import { Sidebar } from './components/sidebar'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './components/resizeble'
import { Button } from './components/button'
import { PlayCircle } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ResizablePanelGroup direction="horizontal" className="flex min-h-screen bg-content text-content-foreground">
      <ResizablePanel defaultSize={20} style={{ maxWidth: '300px', minWidth: '300px' }}>
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80}>
        <div className="flex flex-col h-full pt-8 px-16">
          <div className="flex justify-between items-center w-full mb-16">
            <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">My library bench</h2>
            <Button>
              <PlayCircle className="mr-2 h-4 w-4" />
              Run in parallel
            </Button>
          </div>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Test cases</h3>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default App
