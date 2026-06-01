/**
 * Header Component
 * TODO: Implement main application header
 */

import { useAuth } from '@features/auth'

export const Header = () => {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary-600">Store Intelligence</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-700">{user?.firstName}</span>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
