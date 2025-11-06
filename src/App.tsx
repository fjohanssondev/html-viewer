import { useEffect, useState } from 'react'
import DOMPurify from 'dompurify';
import { useDebounce } from "use-debounce"
import { decode } from 'he';
import { ThemeProvider } from '@/components/theme-provider';
import { Box } from '@/components/ui/box';
import { ModeToggle } from './components/mode-toggle';
import { Label } from '@/components/ui/label';
import { Field } from '@/components/ui/field';
import { Editor } from '@/components/editor';

function App() {
  const [input, setInput] = useState("")
  const [value] = useDebounce(input, 1000)

  useEffect(() => {
    const content = localStorage.getItem("content")

    if (content){
      setInput(content)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("content", value)
  }, [value])

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
          <Editor input={input} setInput={setInput} />
          <Field>
            <Label>Output</Label>
            <Box dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(decode(input)) }} />
          </Field>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
