/**
 * Auth Feature - Auth Hook
 * TODO: Implement useAuth custom hook
 */

import { useAuthStore } from '../store/authStore'

export const useAuth = () => {
  const store = useAuthStore()
  
  return {
    user: store.user,
    isAuthenticated: store.isAuthenticated,
    isLoading: store.isLoading,
    error: store.error,
    login: store.login,
    logout: store.logout,
    refreshToken: store.refreshToken,
    clearError: store.clearError,
  }
}
