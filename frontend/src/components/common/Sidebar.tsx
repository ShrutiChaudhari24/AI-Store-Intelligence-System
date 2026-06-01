/**
 * Sidebar Component
 * TODO: Implement main navigation sidebar
 */

import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/events', label: 'Events' },
  { path: '/analytics', label: 'Analytics' },
  { path: '/cameras', label: 'Cameras' },
  { path: '/stores', label: 'Stores' },
  { path: '/config', label: 'Configuration' },
]

export const Sidebar = () => {
  const location = useLocation()

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-2 rounded transition ${
              location.pathname === item.path
                ? 'bg-primary-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
