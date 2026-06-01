/**
 * Auth Context Provider
 * TODO: Implement auth context for global auth state
 */

import { createContext, ReactNode, useEffect } from 'react'
import { useAuthStore } from '@features/auth'

export const AuthContext = createContext(null)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const authStore = useAuthStore()

  useEffect(() => {
    // TODO: Initialize auth on app load
    // TODO: Check for stored token and restore session
    console.log('TODO: Initialize auth on app load')
  }, [])

  return <AuthContext.Provider value={authStore as any}>{children}</AuthContext.Provider>
}
