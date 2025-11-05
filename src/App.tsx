import { useState } from 'react'
import DOMPurify from 'dompurify';
import { Textarea } from '@/components/ui/textarea'
import { Box } from '@/components/ui/box';
import './App.css'

function App() {
  const [input, setInput] = useState("")

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex h-48 w-full gap-8">
      <Textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <Box dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(input) }} />
      </div>
    </main>
  )
}

export default App
