import type React from 'react';
import type { SetStateAction } from 'react';
import { Textarea } from '@/components/ui/textarea'
import { Clipboard } from '@/components/ui/clipboard';
import { Button, Label, Field } from '@/components/ui';
import { Badge } from './ui/badge';
import { Save } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface EditorProps {
  input: string
  setInput: React.Dispatch<SetStateAction<string>>
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  isTyping?: boolean
}

function Editor({ input, setInput, handleInputChange, isTyping }: EditorProps){
  const { t } = useLanguage()

  return (
    <Field>
      <Label htmlFor="input">{t.editor.input}</Label>
      <Textarea id="input" value={input} onChange={handleInputChange} />
      <div className="flex items-center">
        <Badge variant="outline" className="mt-2">{isTyping ? t.editor.typing : <><Save /> {t.editor.saved}</>}</Badge>
        <div className="flex ml-auto items-center space-x-4 mt-2">
          <Clipboard text={input} />
          <Button onClick={() => setInput("")}>{t.editor.reset}</Button>
        </div>
      </div>
    </Field>
  )
}

export { Editor }