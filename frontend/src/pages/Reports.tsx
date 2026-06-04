import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const footfallData = [
  { date: 'May 14', footfall: 2341 },
  { date: 'May 15', footfall: 2210 },
  { date: 'May 16', footfall: 2290 },
  { date: 'May 17', footfall: 2000 },
  { date: 'May 18', footfall: 2181 },
  { date: 'May 19', footfall: 2500 },
  { date: 'May 20', footfall: 2100 },
];

export const Reports: React.FC = () => {
  const [dateRange, setDateRange] = useState('week');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Reports</h1>
          <p className="text-gray-400 mt-1">Generate and view detailed analytics reports</p>
        </div>
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center gap-2">
          📥 Download
        </button>
      </div>

      {/* Report Controls */}
      <div className="flex gap-4 flex-wrap">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Date Range</label>
          <div className="flex gap-2">
            <input
              type="date"
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="flex items-center text-gray-400">to</span>
            <input
              type="date"
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Report Summary */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Footfall Report</h3>
        <p className="text-gray-400 text-sm mb-4">May 14, 2025 - May 20, 2025</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-slate-700/50 p-4 rounded-lg">
            <p className="text-gray-400 text-xs mb-1">Total Footfall</p>
            <p className="text-2xl font-bold text-white">16,842</p>
            <p className="text-green-400 text-xs mt-2">+18% vs last week</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-lg">
            <p className="text-gray-400 text-xs mb-1">Unique Visitors</p>
            <p className="text-2xl font-bold text-white">12,531</p>
            <p className="text-green-400 text-xs mt-2">+12% vs last week</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-lg">
            <p className="text-gray-400 text-xs mb-1">Avg Dwell Time</p>
            <p className="text-2xl font-bold text-white">3m 42s</p>
            <p className="text-green-400 text-xs mt-2">+5.1% vs last week</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-lg">
            <p className="text-gray-400 text-xs mb-1">Total Events</p>
            <p className="text-2xl font-bold text-white">185</p>
            <p className="text-yellow-400 text-xs mt-2">+23% vs last week</p>
          </div>
        </div>

        {/* Footfall Over Time */}
        <div className="bg-slate-700/30 rounded-lg p-4">
          <h4 className="text-white font-medium mb-4">Footfall Over Time</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={footfallData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="date" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#fff' }}
              />
              <Line type="monotone" dataKey="footfall" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Zone Performance Report */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Zone Performance</h3>
          <div className="space-y-3">
            {[
              { zone: 'Electronics Zone', footfall: 4250, dwell: '4m 32s' },
              { zone: 'Clothing Section', footfall: 3840, dwell: '3m 45s' },
              { zone: 'Billing Area', footfall: 5200, dwell: '2m 15s' },
              { zone: 'Entrance', footfall: 3552, dwell: '1m 20s' },
            ].map((row) => (
              <div key={row.zone} className="flex justify-between items-center pb-3 border-b border-slate-700 last:border-0">
                <div>
                  <p className="text-white font-medium text-sm">{row.zone}</p>
                  <p className="text-gray-400 text-xs">{row.dwell} avg dwell</p>
                </div>
                <p className="text-blue-400 font-bold">{row.footfall}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hourly Distribution */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Hourly Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={footfallData.slice(0, 5)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="date" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="footfall" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Report Export Options */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Export Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition border border-slate-600">
            <span className="text-2xl">📊</span>
            <div className="text-left">
              <p className="text-white font-medium text-sm">PDF</p>
              <p className="text-gray-400 text-xs">Download as PDF</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition border border-slate-600">
            <span className="text-2xl">📈</span>
            <div className="text-left">
              <p className="text-white font-medium text-sm">Excel</p>
              <p className="text-gray-400 text-xs">Download as XLSX</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition border border-slate-600">
            <span className="text-2xl">📧</span>
            <div className="text-left">
              <p className="text-white font-medium text-sm">Email</p>
              <p className="text-gray-400 text-xs">Send to stakeholders</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
