/**
 * API Types and Constants
 */

export interface ApiError {
  code: string
  message: string
  details?: Record<string, unknown>
}

export interface RequestConfig {
  timeout?: number
  retryAttempts?: number
  headers?: Record<string, string>
}

export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const

export const EVENT_TYPES_DISPLAY = {
  crowd_detected: 'Crowd Detected',
  loitering: 'Loitering',
  collision: 'Collision',
  queue_formation: 'Queue Formation',
  zone_violation: 'Zone Violation',
  person_counted: 'Person Counted',
  unusual_activity: 'Unusual Activity',
} as const

export const SEVERITY_COLORS = {
  low: '#10b981',
  medium: '#f59e0b',
  high: '#ef4444',
  critical: '#7c3aed',
} as const

export const SEVERITY_LABELS = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  critical: 'Critical',
} as const
