import { useEffect, useState } from 'react'
import DOMPurify from 'dompurify';
import { useDebounce } from "use-debounce"
import { decode } from 'he';
import { ThemeProvider } from '@/components/theme-provider';
import { Box, Field, Label } from '@/components/ui';
import { ModeToggle } from '@/components/mode-toggle';
import { Editor } from '@/components/editor';
import { Warning } from '@/components/warning';
import { HtmlValidate } from 'html-validate';
import { LanguageSwitch } from '@/components/language-switch';
import { useLanguage } from './hooks/useLanguage';

const validate = new HtmlValidate({
  extends: ['html-validate:recommended'],
  rules: {
    'void-style': 'off',
    'no-trailing-whitespace': 'off',
  }
});

function App() {
  const [input, setInput] = useState("")
  const [errors, setErrors] = useState<string[]>([])
  const [warnings, setWarnings] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [value] = useDebounce(input, 1000)

  const { t } = useLanguage()

  const validateHTML = async (html: string) => {
    if (!html.trim()) {
      setErrors([])
      setWarnings([])
      return
    }

    const decodedHTML = decode(html)
    const report = await validate.validateString(decodedHTML)

    if (!report.valid) {
      const errorList: string[] = []
      const warningList: string[] = []

      report.results[0].messages.forEach(msg => {
        const message = `Line ${msg.line}, Col ${msg.column}: ${msg.message}`

        if (msg.severity === 2) {
          errorList.push(message)
        } else if (msg.severity === 1) {
          warningList.push(message)
        }
      })

      setErrors(errorList)
      setWarnings(warningList)
    } else {
      setErrors([])
      setWarnings([])
    }
  }

  useEffect(() => {
    if (input === value) {
      setIsTyping(false)
    }
  }, [input, value])

  useEffect(() => {
    const content = localStorage.getItem("content")

    if (content) {
      setInput(content)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("content", value)
  }, [value])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput(value)
    validateHTML(value)
    setIsTyping(true)
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container mx-auto px-4">
        <header className="w-full">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-lg font-medium">
              {t.app.title}
            </h1>
            <div className="flex items-center space-x-4">
              <LanguageSwitch />
              <ModeToggle />
            </div>
          </div>
        </header>
        <main className="flex flex-col items-center justify-center w-full">
          <div className="mb-12">
            <Warning errors={errors} warnings={warnings} />
          </div>
          <div className="flex w-full gap-8">
            <Editor
              input={input}
              handleInputChange={handleInputChange}
              setInput={setInput}
              isTyping={isTyping}
            />
            <Field>
              <Label>{t.editor.output}</Label>
              <Box dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(decode(input)) }} />
            </Field>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
