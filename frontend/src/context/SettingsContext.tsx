/**
 * Settings Context Provider
 * TODO: Implement settings context for application preferences
 */

import { createContext, ReactNode, useState } from 'react'

interface SettingsContextType {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  language: string
  setLanguage: (language: string) => void
  showNotifications: boolean
  setShowNotifications: (show: boolean) => void
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

interface SettingsProviderProps {
  children: ReactNode
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [language, setLanguage] = useState('en')
  const [showNotifications, setShowNotifications] = useState(true)

  return (
    <SettingsContext.Provider
      value={{
        theme,
        setTheme,
        language,
        setLanguage,
        showNotifications,
        setShowNotifications,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
