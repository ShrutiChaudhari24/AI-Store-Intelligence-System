import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

interface Detection {
  id: string;
  camera: string;
  type: string;
  confidence: number;
  timestamp: string;
  count: number;
}

interface Camera {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'inactive';
  resolution: string;
  fps: number;
  detections: number;
}

export const LiveFeed: React.FC = () => {
  const [selectedCamera, setSelectedCamera] = useState('CAM-01');
  const [detections, setDetections] = useState<Detection[]>([]);
  const [cameras, setCameras] = useState<Camera[]>([
    {
      id: 'CAM-01',
      name: 'CAM 01',
      location: 'Main Entrance',
      status: 'active',
      resolution: '1920x1080',
      fps: 30,
      detections: 12,
    },
    {
      id: 'CAM-02',
      name: 'CAM 02',
      location: 'Aisle 1',
      status: 'active',
      resolution: '1920x1080',
      fps: 30,
      detections: 8,
    },
    {
      id: 'CAM-03',
      name: 'CAM 03',
      location: 'Aisle 2',
      status: 'active',
      resolution: '1920x1080',
      fps: 30,
      detections: 5,
    },
    {
      id: 'CAM-04',
      name: 'CAM 04',
      location: 'Billing Area',
      status: 'inactive',
      resolution: '1920x1080',
      fps: 30,
      detections: 0,
    },
    {
      id: 'CAM-05',
      name: 'CAM 05',
      location: 'Parking Area',
      status: 'active',
      resolution: '1920x1080',
      fps: 30,
      detections: 3,
    },
  ]);

  const ws = useWebSocket();

  useEffect(() => {
    if (ws) {
      ws.subscribe(`camera:${selectedCamera}`, (data: Detection) => {
        setDetections((prev) => [data, ...prev.slice(0, 19)]);
      });
    }
  }, [ws, selectedCamera]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Live Feed - Detection & Tracking</h1>
        <p className="text-gray-400">Real-time camera feed with object detection and tracking</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Video Feed */}
        <div className="lg:col-span-3 space-y-4">
          <div className="relative bg-slate-900 rounded-lg border border-slate-700 overflow-hidden aspect-video flex items-center justify-center">
            <div className="absolute top-4 left-4 z-10">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-2 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-white font-medium text-sm">● LIVE</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">📹</div>
              <p className="text-gray-400">Video stream from {selectedCamera}</p>
            </div>
          </div>

          {/* Detection Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
              <p className="text-gray-400 text-sm mb-2">People Detected</p>
              <p className="text-2xl font-bold text-green-400">12</p>
            </div>
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
              <p className="text-gray-400 text-sm mb-2">Current FPS</p>
              <p className="text-2xl font-bold text-blue-400">30</p>
            </div>
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
              <p className="text-gray-400 text-sm mb-2">Inference Time</p>
              <p className="text-2xl font-bold text-yellow-400">45ms</p>
            </div>
          </div>
        </div>

        {/* Camera List */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 h-fit">
          <h3 className="text-lg font-semibold text-white mb-4">Camera List</h3>
          <div className="space-y-3">
            {cameras.map((camera) => (
              <div
                key={camera.id}
                onClick={() => setSelectedCamera(camera.id)}
                className={`p-3 rounded-lg cursor-pointer transition border ${
                  selectedCamera === camera.id
                    ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20'
                    : 'bg-slate-700/50 border-slate-600 hover:border-slate-500'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-white font-medium text-sm">{camera.name}</p>
                    <p className="text-gray-400 text-xs">{camera.location}</p>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      camera.status === 'active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {camera.status === 'active' ? 'Online' : 'Offline'}
                  </span>
                </div>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>Resolution: {camera.resolution}</p>
                  <p>FPS: {camera.fps}</p>
                  <p>Detections: {camera.detections}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-time Detections Log */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Real-time Detections</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-gray-400 font-medium py-3 px-4">Timestamp</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">Camera</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">Type</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">Count</th>
                <th className="text-left text-gray-400 font-medium py-3 px-4">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {detections.slice(0, 10).map((detection) => (
                <tr key={detection.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition">
                  <td className="py-3 px-4 text-gray-300">{new Date(detection.timestamp).toLocaleTimeString()}</td>
                  <td className="py-3 px-4 text-gray-300">{detection.camera}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                      {detection.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{detection.count}</td>
                  <td className="py-3 px-4">
                    <span className="text-green-400 font-medium">{(detection.confidence * 100).toFixed(1)}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {detections.length === 0 && (
            <div className="text-center py-8 text-gray-400">No detections yet</div>
          )}
        </div>
      </div>
    </div>
  );
};
