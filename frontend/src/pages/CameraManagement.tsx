import React, { useState } from 'react';

interface Camera {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline';
  resolution: string;
  fps: number;
  detections: number;
  lastSeen?: string;
}

export const CameraManagement: React.FC = () => {
  const [cameras, setCameras] = useState<Camera[]>([
    {
      id: 'CAM-01',
      name: 'CAM 01',
      location: 'Main Entrance',
      status: 'online',
      resolution: '1920x1080',
      fps: 30,
      detections: 245,
    },
    {
      id: 'CAM-02',
      name: 'CAM 02',
      location: 'Aisle 1',
      status: 'online',
      resolution: '1920x1080',
      fps: 30,
      detections: 156,
    },
    {
      id: 'CAM-03',
      name: 'CAM 03',
      location: 'Aisle 2',
      status: 'online',
      resolution: '1920x1080',
      fps: 30,
      detections: 128,
    },
    {
      id: 'CAM-04',
      name: 'CAM 04',
      location: 'Billing Area',
      status: 'offline',
      resolution: '1920x1080',
      fps: 30,
      detections: 0,
    },
    {
      id: 'CAM-05',
      name: 'CAM 05',
      location: 'Parking Area',
      status: 'online',
      resolution: '1920x1080',
      fps: 30,
      detections: 89,
    },
  ]);

  const [showAddCamera, setShowAddCamera] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Camera Management</h1>
          <p className="text-gray-400 mt-1">Monitor and manage all connected cameras</p>
        </div>
        <button
          onClick={() => setShowAddCamera(!showAddCamera)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center gap-2"
        >
          ➕ Add Camera
        </button>
      </div>

      {/* Add Camera Modal */}
      {showAddCamera && (
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Add New Camera</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Camera Name"
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Location"
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="RTSP URL"
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="IP Address"
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2 mt-4">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
              Add Camera
            </button>
            <button
              onClick={() => setShowAddCamera(false)}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 rounded-lg font-medium transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Cameras Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cameras.map((camera) => (
          <div
            key={camera.id}
            className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-slate-600 transition"
          >
            {/* Camera Preview */}
            <div className="bg-slate-900 aspect-video flex items-center justify-center relative">
              <div className="text-4xl">📹</div>
              {camera.status === 'online' && (
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-lg text-xs border border-green-500/30">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Online
                </div>
              )}
              {camera.status === 'offline' && (
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-red-500/20 text-red-400 px-2 py-1 rounded-lg text-xs border border-red-500/30">
                  <span className="w-2 h-2 bg-red-400 rounded-full" />
                  Offline
                </div>
              )}
            </div>

            {/* Camera Info */}
            <div className="p-4">
              <h3 className="text-white font-semibold mb-1">{camera.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{camera.location}</p>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Resolution:</span>
                  <span className="text-white font-medium">{camera.resolution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">FPS:</span>
                  <span className="text-white font-medium">{camera.fps}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Detections Today:</span>
                  <span className="text-blue-400 font-medium">{camera.detections}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2">
                <button className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 rounded-lg text-sm transition">
                  Edit
                </button>
                <button className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 rounded-lg text-sm transition">
                  Settings
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cameras Table */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Detailed View</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-gray-400 font-medium py-3 px-4">Camera</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">Location</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">Status</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">Resolution</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">FPS</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">Detections</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cameras.map((camera) => (
                <tr key={camera.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition">
                  <td className="py-3 px-4 text-white font-medium">{camera.name}</td>
                  <td className="py-3 px-4 text-gray-300">{camera.location}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        camera.status === 'online'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {camera.status === 'online' ? '🟢 Online' : '🔴 Offline'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{camera.resolution}</td>
                  <td className="py-3 px-4 text-gray-300">{camera.fps}</td>
                  <td className="py-3 px-4 text-blue-400 font-medium">{camera.detections}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-400 hover:text-blue-300 transition">Configure</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* System Health */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
          <p className="text-gray-400 text-sm mb-2">Total Cameras</p>
          <p className="text-3xl font-bold text-white">{cameras.length}</p>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
          <p className="text-gray-400 text-sm mb-2">Online</p>
          <p className="text-3xl font-bold text-green-400">{cameras.filter((c) => c.status === 'online').length}</p>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
          <p className="text-gray-400 text-sm mb-2">Offline</p>
          <p className="text-3xl font-bold text-red-400">{cameras.filter((c) => c.status === 'offline').length}</p>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
          <p className="text-gray-400 text-sm mb-2">System Health</p>
          <p className="text-3xl font-bold text-green-400">98.5%</p>
        </div>
      </div>
    </div>
  );
};
