import { Textarea } from '@/components/ui/textarea'
import { Clipboard } from '@/components/ui/clipboard';
import { Field } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import type React from 'react';
import type { SetStateAction } from 'react';

interface EditorProps {
  input: string
  setInput: React.Dispatch<SetStateAction<string>>
}

function Editor({ input, setInput}: EditorProps){
  return (
    <Field>
      <Label htmlFor="input">Input</Label>
      <Textarea id="input" value={input} onChange={(e) => setInput(e.target.value)} />
      <Clipboard text={input} />
    </Field>
  )
}

export { Editor }