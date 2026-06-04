import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const dwellTimeData = [
  { time: '0-1 min', count: 120 },
  { time: '1-3 min', count: 450 },
  { time: '3-5 min', count: 380 },
  { time: '5-10 min', count: 240 },
  { time: '10+ min', count: 85 },
];

const dwellTimeTrend = [
  { day: 'May 14', time: 180 },
  { day: 'May 15', time: 210 },
  { day: 'May 16', time: 195 },
  { day: 'May 17', time: 225 },
  { day: 'May 18', time: 240 },
  { day: 'May 19', time: 235 },
  { day: 'May 20', time: 242 },
];

export const Analytics: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState('all');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Analytics - Dwell Time Analysis</h1>
          <p className="text-gray-400 mt-1">Analyze customer behavior and store performance metrics</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
          Generate Report
        </button>
      </div>

      {/* Filter */}
      <div>
        <label className="block text-sm text-gray-400 mb-2">Zone Filter</label>
        <select
          value={selectedZone}
          onChange={(e) => setSelectedZone(e.target.value)}
          className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-xs"
        >
          <option value="all">All Zones</option>
          <option value="aisle1">Aisle 1</option>
          <option value="aisle2">Aisle 2</option>
          <option value="aisle3">Aisle 3</option>
          <option value="billing">Billing Area</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <p className="text-gray-400 text-sm mb-2">Average Dwell Time</p>
          <p className="text-3xl font-bold text-white">3m 42s</p>
          <p className="text-green-400 text-sm mt-2">+12.5% vs yesterday</p>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <p className="text-gray-400 text-sm mb-2">Max Dwell Time</p>
          <p className="text-3xl font-bold text-white">25m 14s</p>
          <p className="text-gray-500 text-sm mt-2">Aisle 1 - 14:32</p>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <p className="text-gray-400 text-sm mb-2">Visitors with High Dwell</p>
          <p className="text-3xl font-bold text-white">385</p>
          <p className="text-gray-500 text-sm mt-2">>5 minutes in store</p>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <p className="text-gray-400 text-sm mb-2">Engagement Rate</p>
          <p className="text-3xl font-bold text-white">76.2%</p>
          <p className="text-green-400 text-sm mt-2">+5.3% vs last week</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dwell Time Distribution */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Dwell Time Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dwellTimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Dwell Time Trend */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Dwell Time Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dwellTimeTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="day" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#fff' }}
              />
              <Line type="monotone" dataKey="time" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Zone Performance Table */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Zone Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-gray-400 font-medium py-3 px-4">Zone</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">Avg Dwell Time</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">Visitors</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">Engagement</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">Trend</th>
              </tr>
            </thead>
            <tbody>
              {[
                { zone: 'Electronics Area', dwell: '4m 32s', visitors: 245, engagement: 82.5, trend: '↑' },
                { zone: 'Clothing Section', dwell: '3m 45s', visitors: 198, engagement: 75.2, trend: '↓' },
                { zone: 'Billing Area', dwell: '2m 15s', visitors: 512, engagement: 68.0, trend: '↑' },
                { zone: 'Entrance', dwell: '1m 20s', visitors: 623, engagement: 45.3, trend: '→' },
                { zone: 'Aisle 1', dwell: '5m 10s', visitors: 156, engagement: 88.7, trend: '↑' },
              ].map((row) => (
                <tr key={row.zone} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition">
                  <td className="py-3 px-4 text-gray-300">{row.zone}</td>
                  <td className="py-3 px-4 text-white font-medium">{row.dwell}</td>
                  <td className="py-3 px-4 text-gray-300">{row.visitors}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${row.engagement}%` }}
                        />
                      </div>
                      <span className="text-blue-400 text-sm">{row.engagement}%</span>
                    </div>
                  </td>
                  <td className={`py-3 px-4 font-bold text-lg ${row.trend === '↑' ? 'text-green-400' : row.trend === '↓' ? 'text-red-400' : 'text-gray-400'}`}>
                    {row.trend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-3">💡 Key Insights</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>• Aisle 1 shows the highest engagement with 5m 10s average dwell time</li>
          <li>• Electronics area drives 82.5% engagement - consider expanding this section</li>
          <li>• Entrance zone has low dwell time but high foot traffic - good conversion funnel start</li>
          <li>• Weekend visitors spend 25% more time in store vs weekdays</li>
        </ul>
      </div>
    </div>
  );
};
