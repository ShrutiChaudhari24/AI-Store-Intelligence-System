"""
Configuration management for Store Intelligence System
"""

from typing import List, Optional

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings and environment variables"""

    # Application
    APP_NAME: str = "AI Store Intelligence System"
    APP_VERSION: str = "0.1.0"
    DEBUG: bool = False

    # Server
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    RELOAD: bool = True

    # Database
    DATABASE_URL: str = "postgresql://user:password@localhost:5432/store_intelligence"
    DATABASE_ECHO: bool = False
    DATABASE_POOL_SIZE: int = 20
    DATABASE_MAX_OVERFLOW: int = 10

    # Redis
    REDIS_URL: str = "redis://localhost:6379/0"
    REDIS_CACHE_EXPIRY: int = 3600

    # RabbitMQ
    RABBITMQ_URL: str = "amqp://guest:guest@localhost:5672//"

    # JWT Authentication
    SECRET_KEY: str = "your-secret-key-here"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    # CORS
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:8080",
    ]

    # ML Models
    YOLO_MODEL_PATH: str = "models/yolov8n.pt"
    CONFIDENCE_THRESHOLD: float = 0.5
    NMS_THRESHOLD: float = 0.45

    # Video Processing
    FRAME_EXTRACTION_FPS: int = 30
    VIDEO_RESOLUTION_WIDTH: int = 1920
    VIDEO_RESOLUTION_HEIGHT: int = 1080

    # Event Configuration
    CROWD_DETECTION_THRESHOLD: int = 5
    LOITERING_DURATION_SECONDS: int = 30
    QUEUE_FORMATION_THRESHOLD: int = 8

    # Storage
    STORAGE_PATH: str = "./storage"
    VIDEO_STORAGE_PATH: str = "./storage/videos"
    MODELS_STORAGE_PATH: str = "./storage/models"

    # Logging
    LOG_LEVEL: str = "INFO"
    LOG_FORMAT: str = "json"

    # Feature Flags
    ENABLE_GPU: bool = True
    ENABLE_WEBSOCKET: bool = True
    ENABLE_ANALYTICS_CACHE: bool = True

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
