/**
 * Application Type Definitions
 */

// User Types
export interface User {
  id: string
  username: string
  email: string
  firstName: string
  lastName: string
  role: UserRole
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export type UserRole = 'admin' | 'manager' | 'analyst' | 'viewer'

// Store Types
export interface Store {
  id: string
  name: string
  location: string
  address: string
  timezone: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

// Camera Types
export interface Camera {
  id: string
  storeId: string
  name: string
  rtspUrl: string
  streamType: 'rtsp' | 'mjpeg' | 'http'
  resolution: string
  fps: number
  status: CameraStatus
  locationDescription: string
  isEnabled: boolean
  lastHeartbeat: Date
  createdAt: Date
  updatedAt: Date
}

export type CameraStatus = 'active' | 'inactive' | 'error'

// Event Types
export interface Event {
  id: string
  cameraId: string
  storeId: string
  eventType: EventType
  severity: Severity
  title: string
  description: string
  eventData: Record<string, unknown>
  triggerTimestamp: Date
  acknowledged: boolean
  acknowledgedBy?: string
  acknowledgedAt?: Date
  resolved: boolean
  resolvedBy?: string
  resolvedAt?: Date
  actionTaken?: string
  createdAt: Date
  updatedAt: Date
}

export type EventType =
  | 'crowd_detected'
  | 'loitering'
  | 'collision'
  | 'queue_formation'
  | 'zone_violation'
  | 'person_counted'
  | 'unusual_activity'

export type Severity = 'low' | 'medium' | 'high' | 'critical'

// Analytics Types
export interface AnalyticsDashboard {
  totalPeopleCount: number
  peakHours: number[]
  crowdEvents: number
  avgDwellTime: number
  trends: TrendData[]
  heatmap: number[][]
}

export interface TrendData {
  timestamp: Date
  value: number
}

export interface PeopleCountData {
  timestamp: Date
  count: number
}

// Detection Data
export interface Detection {
  id: number
  cameraId: string
  frameNumber: number
  timestamp: Date
  personCount: number
  detections: BoundingBox[]
  processingTimeMs: number
  createdAt: Date
}

export interface BoundingBox {
  x1: number
  y1: number
  x2: number
  y2: number
  confidence: number
  label: string
}

// Track Data
export interface Track {
  id: number
  cameraId: string
  trackId: number
  startFrame: number
  endFrame: number
  duration: number
  centroidPath: [number, number][]
  zoneEntries: string[]
  status: 'active' | 'completed'
  createdAt: Date
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// Alert Types
export interface Alert {
  id: string
  eventId: string
  userId: string
  alertType: 'email' | 'sms' | 'in_app' | 'webhook'
  status: 'pending' | 'sent' | 'failed'
  recipient: string
  message: string
  sentAt?: Date
  createdAt: Date
}

// Zone Types
export interface Zone {
  id: string
  cameraId: string
  name: string
  zoneType: 'crowd_monitoring' | 'checkout' | 'entrance' | 'custom'
  polygonCoordinates: [number, number][]
  crowdThreshold: number
  alertEnabled: boolean
  createdAt: Date
  updatedAt: Date
}

// WebSocket Message Types
export interface WebSocketMessage<T> {
  type: string
  data: T
  timestamp: Date
}

export interface EventMessage extends WebSocketMessage<Event> {
  type: 'event_created' | 'event_updated' | 'event_resolved'
}

export interface AnalyticsMessage extends WebSocketMessage<Partial<AnalyticsDashboard>> {
  type: 'analytics_update'
}

export interface CameraStatusMessage extends WebSocketMessage<{ cameraId: string; status: CameraStatus }> {
  type: 'camera_status'
}
