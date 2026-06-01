/**
 * Cameras Feature - Main Page
 * TODO: Implement camera management page
 */

export const CamerasPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cameras</h1>
        {/* TODO: Add create camera button */}
      </div>

      {/* TODO: Add camera grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <p className="p-4">Camera Card - TODO</p>
        </div>
      </div>
    </div>
  )
}
