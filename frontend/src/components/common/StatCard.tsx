import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon }) => {
  const isPositive = change.startsWith('+');

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 hover:border-slate-600 transition">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-400 text-sm mb-1">{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
      <p className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {change}
      </p>
    </div>
  );
};
