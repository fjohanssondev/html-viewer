import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { useState } from "react";

function Clipboard({ text }: { text: string }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setClicked(true);
    setTimeout(() => setClicked(false), 3000);
  }

  return (
    <Button className="transition ease-out" size="icon-sm" variant="outline" onClick={handleClick}>
      {clicked ? <Check /> : <Copy />}
    </Button>
  )
}

export { Clipboard }