/**
 * Events Feature - Types
 */

import type { Event } from '@app-types/index'

export interface EventsState {
  events: Event[]
  totalEvents: number
  isLoading: boolean
  error: string | null
  filters: EventFilters
  page: number
  pageSize: number
}

export interface EventFilters {
  eventType?: string
  severity?: string
  storeId?: string
  cameraId?: string
  resolved?: boolean
}
