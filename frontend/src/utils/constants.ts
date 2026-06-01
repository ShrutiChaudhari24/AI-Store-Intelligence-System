/**
 * Application Constants
 */

export const API_ENDPOINTS = {
  AUTH: '/auth',
  EVENTS: '/events',
  ANALYTICS: '/analytics',
  CAMERAS: '/cameras',
  STORES: '/stores',
  CONFIG: '/config',
} as const

export const EVENT_SEVERITY_COLORS = {
  low: '#10b981',
  medium: '#f59e0b',
  high: '#ef4444',
  critical: '#7c3aed',
} as const

export const EVENT_SEVERITY_LABELS = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  critical: 'Critical',
} as const

export const EVENT_TYPE_LABELS = {
  crowd_detected: 'Crowd Detected',
  loitering: 'Loitering',
  collision: 'Collision',
  queue_formation: 'Queue Formation',
  zone_violation: 'Zone Violation',
  person_counted: 'Person Counted',
  unusual_activity: 'Unusual Activity',
} as const

export const CAMERA_STATUS_COLORS = {
  active: '#10b981',
  inactive: '#9ca3af',
  error: '#ef4444',
} as const

export const PAGINATION_DEFAULTS = {
  PAGE_SIZE: 20,
  FIRST_PAGE: 1,
} as const

export const CACHE_KEYS = {
  DASHBOARD: 'dashboard',
  EVENTS: 'events',
  ANALYTICS: 'analytics',
  CAMERAS: 'cameras',
  STORES: 'stores',
  USER: 'user',
} as const

export const TOAST_DURATION = 3000 // milliseconds
export const DEBOUNCE_DELAY = 300 // milliseconds
export const POLLING_INTERVAL = 5000 // milliseconds
