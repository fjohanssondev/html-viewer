import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { useState } from "react";

function Clipboard({ text }: { text: string }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  }

  return (
    <Button size="icon-sm" variant="outline" onClick={handleClick}>
      <div 
        className="flex items-center justify-center absolute h-6 w-6 will-change-transform transition-all duration-200"
        style={{
          opacity: clicked ? 0 : 1,
          filter: 'blur(0px)',
          transitionProperty: 'opacity, filter'
        }}
        onTransitionStart={(e) => {
          if (e.propertyName === 'opacity') {
            e.currentTarget.style.filter = 'blur(2px)';
          }
        }}
        onTransitionEnd={(e) => {
          if (e.propertyName === 'opacity') {
            e.currentTarget.style.filter = 'blur(0px)';
          }
        }}
      >
        <Copy />
      </div>
      <div 
        className="flex items-center justify-center absolute h-6 w-6 will-change-transform transition-all duration-200"
        style={{
          opacity: clicked ? 1 : 0,
          filter: 'blur(0px)',
          transitionProperty: 'opacity, filter'
        }}
        onTransitionStart={(e) => {
          if (e.propertyName === 'opacity') {
            e.currentTarget.style.filter = 'blur(2px)';
          }
        }}
        onTransitionEnd={(e) => {
          if (e.propertyName === 'opacity') {
            e.currentTarget.style.filter = 'blur(0px)';
          }
        }}
      >
        <Check />
      </div>
    </Button>
  )
}

export { Clipboard }