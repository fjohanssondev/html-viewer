import React, { createContext, useEffect, useState } from "react"
import en from "@/locales/en.json"
import sv from "@/locales/sv.json"

interface LanguageProviderProps {
  children: React.ReactNode
}

type Language = "en" | "sv"

type Translations = typeof en

// eslint-disable-next-line react-refresh/only-export-components
export const translations: Record<Language, Translations> = {
  en,
  sv
}

type LanguageContextType = {
  selectedLanguage: Language
  setSelectedLanguage: React.Dispatch<React.SetStateAction<Language>>
  t: Translations
}

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function LanguageProvider({ children }: LanguageProviderProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language")
    return (saved as Language) || "en"
  })

  useEffect(() => {
    localStorage.setItem("language", selectedLanguage)
  }, [selectedLanguage])

  const value = {
    selectedLanguage,
    setSelectedLanguage,
    t: translations[selectedLanguage]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageProvider }