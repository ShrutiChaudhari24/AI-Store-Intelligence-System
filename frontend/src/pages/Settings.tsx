import React, { useState } from 'react';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">System Settings</h1>
        <p className="text-gray-400 mt-1">Configure system preferences and integrations</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-700 flex-wrap">
        {[
          { id: 'general', label: '⚙️ General' },
          { id: 'notifications', label: '🔔 Notifications' },
          { id: 'alerts', label: '⚠️ Alerts' },
          { id: 'integrations', label: '🔗 Integrations' },
          { id: 'users', label: '👥 Users' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 font-medium transition ${
              activeTab === tab.id
                ? 'text-blue-400 border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* General Settings */}
      {activeTab === 'general' && (
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Store Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Store Name</label>
                <input
                  type="text"
                  defaultValue="AI Store Intelligence System"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Location</label>
                  <input
                    type="text"
                    defaultValue="Main Branch"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Timezone</label>
                  <select className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>UTC-05:00 (EST)</option>
                    <option>UTC-06:00 (CST)</option>
                    <option>UTC-07:00 (MST)</option>
                    <option>UTC-08:00 (PST)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Description</label>
                <textarea
                  defaultValue="AI-Powered CCTV Analytics for Smarter Retail"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Detection Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">People Detection Confidence Threshold</p>
                  <p className="text-gray-400 text-sm">Minimum confidence for detection</p>
                </div>
                <input type="range" min="0" max="100" defaultValue="75" className="w-32" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Crowd Detection Sensitivity</p>
                  <p className="text-gray-400 text-sm">Adjust crowd detection threshold</p>
                </div>
                <select className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white">
                  <option>Low</option>
                  <option selected>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">💾 Save Changes</h3>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
              Save Settings
            </button>
          </div>
        </div>
      )}

      {/* Notifications Settings */}
      {activeTab === 'notifications' && (
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 space-y-6">
          <h3 className="text-lg font-semibold text-white">Notification Preferences</h3>

          {[
            { name: 'Crowd Detected', enabled: true },
            { name: 'Dwell Time Alert', enabled: true },
            { name: 'System Alerts', enabled: true },
            { name: 'Email Notifications', enabled: false },
            { name: 'SMS Alerts', enabled: false },
            { name: 'Slack Integration', enabled: true },
          ].map((notif) => (
            <div key={notif.name} className="flex items-center justify-between pb-4 border-b border-slate-700 last:border-0">
              <p className="text-white">{notif.name}</p>
              <div className={`w-12 h-6 rounded-full transition ${notif.enabled ? 'bg-blue-600' : 'bg-slate-600'}`} />
            </div>
          ))}
        </div>
      )}

      {/* Alerts Settings */}
      {activeTab === 'alerts' && (
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Alert Thresholds</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Dwell Time Threshold (seconds)</label>
                <input type="number" defaultValue="300" className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Crowd Alert Threshold (people)</label>
                <input type="number" defaultValue="50" className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Alert Cooldown Period (minutes)</label>
                <input type="number" defaultValue="15" className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Integrations */}
      {activeTab === 'integrations' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'Slack', icon: '💬', status: 'connected' },
            { name: 'AWS S3', icon: '☁️', status: 'disconnected' },
            { name: 'Google Analytics', icon: '📊', status: 'connected' },
            { name: 'Microsoft Teams', icon: '👥', status: 'disconnected' },
            { name: 'PagerDuty', icon: '🚨', status: 'connected' },
            { name: 'Datadog', icon: '📈', status: 'disconnected' },
          ].map((integration) => (
            <div key={integration.name} className="bg-slate-800 rounded-lg border border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{integration.icon}</span>
                  <p className="text-white font-medium">{integration.name}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    integration.status === 'connected'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}
                >
                  {integration.status === 'connected' ? '✓ Connected' : 'Disconnected'}
                </span>
              </div>
              <button className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 rounded-lg transition text-sm">
                {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Users Management */}
      {activeTab === 'users' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">Users & Permissions</h3>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
              ➕ Add User
            </button>
          </div>

          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-700/30">
                  <th className="text-left text-gray-400 font-medium py-3 px-4">Name</th>
                  <th className="text-left text-gray-400 font-medium py-3 px-4">Email</th>
                  <th className="text-left text-gray-400 font-medium py-3 px-4">Role</th>
                  <th className="text-left text-gray-400 font-medium py-3 px-4">Status</th>
                  <th className="text-left text-gray-400 font-medium py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Admin User', email: 'admin@store.com', role: 'Administrator', status: 'active' },
                  { name: 'Manager', email: 'manager@store.com', role: 'Manager', status: 'active' },
                  { name: 'Analyst', email: 'analyst@store.com', role: 'Analyst', status: 'active' },
                ].map((user) => (
                  <tr key={user.email} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition">
                    <td className="py-3 px-4 text-white">{user.name}</td>
                    <td className="py-3 px-4 text-gray-300">{user.email}</td>
                    <td className="py-3 px-4 text-gray-300">{user.role}</td>
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                        ● {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-400 hover:text-blue-300 transition text-sm">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
