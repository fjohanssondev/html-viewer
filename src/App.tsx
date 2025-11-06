import { useState } from 'react'
import DOMPurify from 'dompurify';
import { ThemeProvider } from '@/components/theme-provider';
import { Textarea } from '@/components/ui/textarea'
import { Box } from '@/components/ui/box';
import { ModeToggle } from './components/mode-toggle';
import { Label } from '@/components/ui/label';
import { Field } from '@/components/ui/field';
import { Clipboard } from '@/components/ui/clipboard';

function App() {
  const [input, setInput] = useState("")

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container mx-auto px-4">
        <header className="w-full">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-medium">
          HTML/XML Viewer
          </h1>
          <ModeToggle />
        </div>
        </header>
        <main className="flex flex-col items-center justify-center w-full">
          <div className="flex w-full gap-8">
          <Field>
            <Label htmlFor="input">Input</Label>
            <Textarea id="input" value={input} onChange={(e) => setInput(e.target.value)} />
            <Clipboard text={input} />
          </Field>
          <Field>
            <Label>Output</Label>
            <Box dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(input) }} />
          </Field>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
