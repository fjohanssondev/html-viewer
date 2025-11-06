import type React from 'react';
import type { SetStateAction } from 'react';
import { Textarea } from '@/components/ui/textarea'
import { Clipboard } from '@/components/ui/clipboard';
import { Button, Label, Field } from '@/components/ui';

interface EditorProps {
  input: string
  setInput: React.Dispatch<SetStateAction<string>>
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function Editor({ input, setInput, handleInputChange}: EditorProps){
  return (
    <Field>
      <Label htmlFor="input">Input</Label>
      <Textarea id="input" value={input} onChange={handleInputChange} />
      <div className="flex justify-end items-center space-x-4 mt-2">
        <Clipboard text={input} />
        <Button onClick={() => setInput("")}>Reset</Button>
      </div>
    </Field>
  )
}

export { Editor }