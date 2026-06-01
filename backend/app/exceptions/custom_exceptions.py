"""
Custom exception classes for Store Intelligence System
"""

# TODO: Implement custom exceptions
# - Authentication errors
# - Validation errors
# - Resource not found errors
# - Permission errors
# - Service errors


class StoreIntelligenceException(Exception):
    """Base exception for Store Intelligence System"""
    pass


class AuthenticationError(StoreIntelligenceException):
    """Authentication failed"""
    pass


class AuthorizationError(StoreIntelligenceException):
    """User not authorized"""
    pass


class ValidationError(StoreIntelligenceException):
    """Input validation failed"""
    pass


class ResourceNotFoundError(StoreIntelligenceException):
    """Resource not found"""
    pass


class DatabaseError(StoreIntelligenceException):
    """Database operation failed"""
    pass


class StreamError(StoreIntelligenceException):
    """Video stream error"""
    pass


class DetectionError(StoreIntelligenceException):
    """Detection service error"""
    pass


class TrackingError(StoreIntelligenceException):
    """Tracking service error"""
    pass


class EventGenerationError(StoreIntelligenceException):
    """Event generation failed"""
    pass


class CacheError(StoreIntelligenceException):
    """Cache operation failed"""
    pass


class MessageQueueError(StoreIntelligenceException):
    """Message queue operation failed"""
    pass


class ConfigurationError(StoreIntelligenceException):
    """Configuration error"""
    pass


class ServiceUnavailableError(StoreIntelligenceException):
    """Service temporarily unavailable"""
    pass
