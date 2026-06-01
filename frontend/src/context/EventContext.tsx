/**
 * Event Context Provider
 * TODO: Implement event context for global event state
 */

import { createContext, ReactNode, useState } from 'react'
import type { Event } from '@app-types/index'

interface EventContextType {
  events: Event[]
  addEvent: (event: Event) => void
  removeEvent: (eventId: string) => void
  clearEvents: () => void
}

export const EventContext = createContext<EventContextType | undefined>(undefined)

interface EventProviderProps {
  children: ReactNode
}

export const EventProvider = ({ children }: EventProviderProps) => {
  const [events, setEvents] = useState<Event[]>([])

  const addEvent = (event: Event) => {
    setEvents((prev) => [event, ...prev])
  }

  const removeEvent = (eventId: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== eventId))
  }

  const clearEvents = () => {
    setEvents([])
  }

  return (
    <EventContext.Provider value={{ events, addEvent, removeEvent, clearEvents }}>
      {children}
    </EventContext.Provider>
  )
}
