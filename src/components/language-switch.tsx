import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Button } from "@/components/ui";
import { useLanguage } from "@/hooks/useLanguage";
import { Globe } from "lucide-react";

function LanguageSwitch() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Globe />
          {selectedLanguage === "en" ? "English" : "Svenska"}
          <span className="sr-only">Switch Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setSelectedLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelectedLanguage("sv")}>
          Svenska
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { LanguageSwitch }