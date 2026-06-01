/**
 * Cameras Feature - Camera Card Component
 * TODO: Implement camera card component for grid display
 */

import type { Camera } from '@app-types/index'

interface CameraCardProps {
  camera: Camera
  onEdit?: () => void
  onDelete?: () => void
  onStreamClick?: () => void
}

export const CameraCard = ({ camera, onEdit, onDelete, onStreamClick }: CameraCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
      <div className="aspect-video bg-gray-200">
        {/* TODO: Add video preview or thumbnail */}
        <p className="p-4">Video Stream - TODO</p>
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{camera.name}</h3>
        <p className="text-sm text-gray-500">{camera.locationDescription}</p>
        <div className="mt-4 flex gap-2">
          {/* TODO: Add action buttons */}
        </div>
      </div>
    </div>
  )
}
