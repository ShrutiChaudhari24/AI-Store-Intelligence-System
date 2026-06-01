/**
 * Auth Feature - Protected Route Component
 * TODO: Implement route protection with auth guard
 */

import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import type { User } from '@app-types/index'

interface ProtectedRouteProps {
  children: ReactNode
  requiredRole?: string | User['role']
}

export const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
