"""
Application constants and configuration values
"""

# TODO: Define application constants

# Event types
EVENT_TYPES = [
    "crowd_detected",
    "loitering",
    "collision",
    "queue_formation",
    "zone_violation",
    "person_counted",
    "unusual_activity",
]

# Severity levels
SEVERITY_LEVELS = ["low", "medium", "high", "critical"]

# Camera status
CAMERA_STATUS = ["active", "inactive", "error"]

# Stream types
STREAM_TYPES = ["rtsp", "mjpeg", "http"]

# User roles
USER_ROLES = ["admin", "manager", "analyst", "viewer"]

# Default values
DEFAULT_FPS = 30
DEFAULT_CONFIDENCE_THRESHOLD = 0.5
DEFAULT_NMS_THRESHOLD = 0.45
DEFAULT_CROWD_THRESHOLD = 5
DEFAULT_LOITERING_DURATION = 30  # seconds

# API versions
API_VERSION = "v1"
API_PREFIX = f"/api/{API_VERSION}"

# Cache keys
CACHE_KEY_USER_SESSION = "user_session:{user_id}"
CACHE_KEY_ANALYTICS = "analytics:{store_id}"
CACHE_KEY_CAMERA_STATUS = "camera_status:{camera_id}"

# Rate limits
RATE_LIMIT_DEFAULT = 100  # requests per minute
RATE_LIMIT_STRICT = 10    # requests per minute
