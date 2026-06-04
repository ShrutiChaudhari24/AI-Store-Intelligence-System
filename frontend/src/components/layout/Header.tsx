import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 border-b border-slate-700 px-8 py-4 flex items-center justify-between ml-64">
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-white transition">
          <span className="text-xl">🔔</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Settings */}
        <button className="p-2 text-gray-400 hover:text-white transition">
          <span className="text-xl">⚙️</span>
        </button>

        {/* User Menu */}
        <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-700">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
            A
          </div>
          <div>
            <p className="text-white text-sm font-medium">Admin</p>
            <p className="text-gray-400 text-xs">Active</p>
          </div>
        </div>
      </div>
    </header>
  );
};
