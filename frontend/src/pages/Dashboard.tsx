import React, { useEffect, useState } from 'react';
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { StatCard } from '../components/common/StatCard';
import { useFetch } from '../hooks/useFetch';

interface DashboardData {
  footfall: number;
  uniqueVisitors: number;
  totalEvents: number;
  avgDwellTime: number;
  footfallTrend: Array<{ time: string; count: number }>;
  topZones: Array<{ zone: string; visitors: number; percentage: number }>;
}

export const Dashboard: React.FC = () => {
  const { data: dashboardData, loading } = useFetch<DashboardData>('/api/v1/dashboard/overview');
  const [timeRange, setTimeRange] = useState('today');

  if (loading) {
    return <div className="p-8 text-center text-gray-400">Loading dashboard...</div>;
  }

  const footfallTrendData = dashboardData?.footfallTrend || [];
  const topZonesData = dashboardData?.topZones || [];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        <div className="flex gap-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition">
            Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Footfall"
          value={dashboardData?.footfall || 2431}
          change="+12.5%"
          icon="👥"
        />
        <StatCard
          title="Unique Visitors"
          value={dashboardData?.uniqueVisitors || 1842}
          change="+8.2%"
          icon="👤"
        />
        <StatCard
          title="Total Events"
          value={dashboardData?.totalEvents || 24}
          change="+5.1%"
          icon="📊"
        />
        <StatCard
          title="Avg. Dwell Time"
          value={`${dashboardData?.avgDwellTime || 3}m 42s`}
          change="+2.3%"
          icon="⏱️"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Footfall Trend */}
        <div className="lg:col-span-2 bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Footfall Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={footfallTrendData}>
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
              <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Zones by Footfall */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Top Zones by Footfall</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={topZonesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ zone, percentage }) => `${zone} ${percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="visitors"
              >
                {topZonesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Conversion Insights */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Zone Performance</h3>
          <div className="space-y-3">
            {topZonesData.slice(0, 3).map((zone) => (
              <div key={zone.zone} className="flex items-center justify-between">
                <span className="text-gray-300">{zone.zone}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${zone.percentage}%` }}
                    />
                  </div>
                  <span className="text-blue-400 font-medium text-sm w-12 text-right">{zone.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center border-b border-slate-700 pb-3">
              <span className="text-gray-400">Peak Hours</span>
              <span className="text-white font-medium">12:00 - 2:00 PM</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-700 pb-3">
              <span className="text-gray-400">Avg. Transaction Value</span>
              <span className="text-white font-medium">$45.50</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Store Capacity</span>
              <span className="text-white font-medium">62%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
