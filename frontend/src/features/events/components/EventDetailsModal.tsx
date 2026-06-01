/**
 * Events Feature - Event Details Modal
 * TODO: Implement event details modal component
 */

import type { Event } from '@app-types/index'

interface EventDetailsModalProps {
  event: Event | null
  isOpen: boolean
  onClose: () => void
  onAcknowledge?: () => void
  onResolve?: () => void
}

export const EventDetailsModal = ({
  event,
  isOpen,
  onClose,
  onAcknowledge,
  onResolve,
}: EventDetailsModalProps) => {
  if (!isOpen || !event) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{event.title}</h2>
          <button onClick={onClose}>✕</button>
        </div>
        {/* TODO: Add event details content */}
        <p>Event Details - TODO</p>
      </div>
    </div>
  )
}
