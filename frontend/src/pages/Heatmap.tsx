import React, { useState } from 'react';

export const Heatmap: React.FC = () => {
  const [selectedCamera, setSelectedCamera] = useState('CAM-01');
  const [timeRange, setTimeRange] = useState('today');

  const cameras = ['CAM-01', 'CAM-02', 'CAM-03', 'CAM-04', 'CAM-05'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Heatmap - Store View</h1>
          <p className="text-gray-400 mt-1">Visualize customer movement and density across the store</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 flex-wrap">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Camera</label>
          <select
            value={selectedCamera}
            onChange={(e) => setSelectedCamera(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {cameras.map((cam) => (
              <option key={cam} value={cam}>
                {cam}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Time Range</label>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>

      {/* Main Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
          {/* Heatmap Visualization */}
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 aspect-video flex items-center justify-center">
            <div className="relative w-full h-full max-w-2xl max-h-96">
              {/* Store Layout Visualization */}
              <svg viewBox="0 0 400 300" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))' }}>
                {/* Store Background */}
                <rect width="400" height="300" fill="#1e293b" opacity="0.3" />

                {/* Aisles */}
                <rect x="30" y="30" width="80" height="240" fill="none" stroke="#475569" strokeWidth="1" opacity="0.5" />
                <text x="70" y="165" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  Aisle 1
                </text>

                <rect x="130" y="30" width="80" height="240" fill="none" stroke="#475569" strokeWidth="1" opacity="0.5" />
                <text x="170" y="165" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  Aisle 2
                </text>

                <rect x="230" y="30" width="80" height="240" fill="none" stroke="#475569" strokeWidth="1" opacity="0.5" />
                <text x="270" y="165" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  Aisle 3
                </text>

                <rect x="330" y="30" width="40" height="240" fill="none" stroke="#475569" strokeWidth="1" opacity="0.5" />
                <text x="350" y="165" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  Billing
                </text>

                {/* Entrance */}
                <rect x="30" y="270" width="340" height="20" fill="none" stroke="#475569" strokeWidth="2" opacity="0.7" />
                <text x="200" y="285" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  Entrance
                </text>

                {/* Heatmap overlay - gradient circles representing hotspots */}
                <circle cx="70" cy="80" r="25" fill="#ef4444" opacity="0.6" />
                <circle cx="70" cy="150" r="35" fill="#f97316" opacity="0.5" />
                <circle cx="170" cy="120" r="28" fill="#eab308" opacity="0.5" />
                <circle cx="270" cy="180" r="22" fill="#84cc16" opacity="0.4" />
                <circle cx="350" cy="140" r="30" fill="#ef4444" opacity="0.6" />

                {/* Legend Indicator */}
                <text x="320" y="25" fill="#60a5fa" fontSize="10" fontWeight="bold">
                  HOTSPOT ANALYSIS
                </text>
              </svg>

              {/* Overlay controls */}
              <div className="absolute top-4 left-4">
                <div className="bg-black/60 backdrop-blur px-3 py-2 rounded-lg">
                  <p className="text-white font-medium text-sm">{selectedCamera}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Color Legend */}
          <div className="p-4 border-t border-slate-700">
            <p className="text-sm text-gray-400 mb-3">Intensity Legend:</p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded" style={{ background: 'linear-gradient(to right, #1e3a8a, #ef4444)' }} />
                <span className="text-xs text-gray-400">Low → High</span>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full bg-ef4444 mx-auto mb-1" style={{ background: '#ef4444' }} />
                  <p className="text-xs text-gray-400">Critical</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full mx-auto mb-1" style={{ background: '#f97316' }} />
                  <p className="text-xs text-gray-400">High</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full mx-auto mb-1" style={{ background: '#eab308' }} />
                  <p className="text-xs text-gray-400">Medium</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full mx-auto mb-1" style={{ background: '#84cc16' }} />
                  <p className="text-xs text-gray-400">Low</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zone Statistics */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Zone Statistics</h3>
          <div className="space-y-4">
            {[
              { zone: 'Aisle 1', people: 24, intensity: 'High' },
              { zone: 'Aisle 2', people: 18, intensity: 'Medium' },
              { zone: 'Aisle 3', people: 12, intensity: 'Low' },
              { zone: 'Billing Area', people: 15, intensity: 'High' },
              { zone: 'Entrance', people: 8, intensity: 'Low' },
            ].map((stat) => (
              <div key={stat.zone} className="pb-4 border-b border-slate-700 last:border-0">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-300 text-sm font-medium">{stat.zone}</p>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      stat.intensity === 'High'
                        ? 'bg-red-500/20 text-red-400'
                        : stat.intensity === 'Medium'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-green-500/20 text-green-400'
                    }`}
                  >
                    {stat.intensity}
                  </span>
                </div>
                <p className="text-white font-bold text-lg">{stat.people} people</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
          <p className="text-gray-400 text-sm mb-2">Peak Density Zone</p>
          <p className="text-xl font-bold text-red-400">Aisle 1</p>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
          <p className="text-gray-400 text-sm mb-2">Total Coverage</p>
          <p className="text-xl font-bold text-blue-400">98.5%</p>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
          <p className="text-gray-400 text-sm mb-2">Data Points</p>
          <p className="text-xl font-bold text-green-400">2,847</p>
        </div>
      </div>
    </div>
  );
};
