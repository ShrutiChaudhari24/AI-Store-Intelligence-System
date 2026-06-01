/**
 * Config Feature - Settings Page
 * TODO: Implement system configuration page
 */

export const ConfigPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Configuration</h1>

      {/* TODO: Add tabs for different config sections */}
      <div className="flex gap-4 border-b">
        <button className="px-4 py-2 border-b-2 border-primary-500">Detection Settings</button>
        <button className="px-4 py-2">Alert Rules</button>
        <button className="px-4 py-2">System Settings</button>
      </div>

      {/* TODO: Add config forms */}
      <div className="bg-white p-6 rounded-lg shadow">
        <p>Configuration Forms - TODO</p>
      </div>
    </div>
  )
}
