import React, { createContext, useEffect, useState } from "react"

interface LanguageProviderProps {
  children: React.ReactNode
}

type Language = "en" | "sv"

type LanguageContextType = {
  selectedLanguage: Language
  setSelectedLanguage: React.Dispatch<React.SetStateAction<Language>>
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
    setSelectedLanguage
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageProvider }