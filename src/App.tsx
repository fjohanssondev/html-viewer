import { useState } from 'react'
import DOMPurify from 'dompurify';
import { ThemeProvider } from '@/components/theme-provider';
import { Textarea } from '@/components/ui/textarea'
import { Box } from '@/components/ui/box';
import { ModeToggle } from './components/mode-toggle';
import './App.css'

function App() {
  const [input, setInput] = useState("")

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header>
        <div className="flex items-center justify-between p-4">
          <h1 className="text-3xl font-bold underline">
          HTML/XML Viewer
          </h1>
          <ModeToggle />
        </div>
      </header>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex h-48 w-full gap-8">
        <Textarea value={input} onChange={(e) => setInput(e.target.value)} />
        <Box dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(input) }} />
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App
