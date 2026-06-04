import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

interface Event {
  id: string;
  type: string;
  location: string;
  description: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
}

export const Events: React.FC = () => {
  const [eventType, setEventType] = useState('all');
  const [severity, setSeverity] = useState('all');
  const { data: events, loading } = useFetch<Event[]>('/api/v1/events');

  const eventTypes = ['Crowd Detected', 'Dwell Time', 'Loitering', 'Line Crossing'];

  const getSeverityColor = (sev: string) => {
    switch (sev) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Real-time Events</h1>
          <p className="text-gray-400 mt-1">Monitor store events and alerts in real-time</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
          Export Events
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Event Type</label>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Events</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Severity</label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Levels</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm text-gray-400 mb-2">Search</label>
          <input
            type="text"
            placeholder="Search events..."
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid gap-4">
        {loading ? (
          <div className="text-center py-8 text-gray-400">Loading events...</div>
        ) : events && events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition"
            >
              <div className="flex items-start justify-between gap-4">
                {/* Event Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-semibold">{event.type}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(
                        event.severity
                      )}`}
                    >
                      {event.severity.charAt(0).toUpperCase() + event.severity.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{event.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>📍 {event.location}</span>
                    <span>🕐 {new Date(event.timestamp).toLocaleString()}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 rounded-lg text-sm transition">
                    View
                  </button>
                  <button className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 rounded-lg text-sm transition">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-400">No events found</div>
        )}
      </div>

      {/* Event Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
          <p className="text-gray-400 text-sm mb-2">Total Events</p>
          <p className="text-3xl font-bold text-white">156</p>
          <p className="text-gray-500 text-xs mt-2">+23% from yesterday</p>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
          <p className="text-gray-400 text-sm mb-2">High Priority</p>
          <p className="text-3xl font-bold text-red-400">12</p>
          <p className="text-gray-500 text-xs mt-2">Requires attention</p>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
          <p className="text-gray-400 text-sm mb-2">Avg Response Time</p>
          <p className="text-3xl font-bold text-blue-400">2.3s</p>
          <p className="text-gray-500 text-xs mt-2">Detection to alert</p>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
          <p className="text-gray-400 text-sm mb-2">Resolved Today</p>
          <p className="text-3xl font-bold text-green-400">142</p>
          <p className="text-gray-500 text-xs mt-2">91% resolution rate</p>
        </div>
      </div>
    </div>
  );
};
