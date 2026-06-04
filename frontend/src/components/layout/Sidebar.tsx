import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const navItems: NavItem[] = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/live-feed', label: 'Live Feed', icon: '📹' },
    { path: '/events', label: 'Events', icon: '⚠️' },
    { path: '/heatmap', label: 'Heatmap', icon: '🔥' },
    { path: '/analytics', label: 'Analytics', icon: '📈' },
    { path: '/reports', label: 'Reports', icon: '📋' },
    { path: '/cameras', label: 'Cameras', icon: '📷' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 h-screen flex flex-col p-6 fixed left-0 top-0 overflow-y-auto">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">⚡</span>
        </div>
        <div>
          <h2 className="text-white font-bold text-lg">AI Store</h2>
          <p className="text-gray-400 text-xs">Intelligence System</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                  : 'text-gray-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-4 mt-auto">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white text-sm">
            👤
          </div>
          <div>
            <p className="text-white text-sm font-medium">Admin User</p>
            <p className="text-gray-400 text-xs">admin@store.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
