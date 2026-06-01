"""
SQLAlchemy database models for Store Intelligence System
"""

from datetime import datetime
from uuid import uuid4

# TODO: Import SQLAlchemy
# from sqlalchemy import Column, String, Integer, DateTime, Boolean, UUID, ForeignKey, JSON, Enum, DECIMAL
# from sqlalchemy.orm import declarative_base, relationship
# from sqlalchemy.dialects.postgresql import JSONB

# Base = declarative_base()


# TODO: Define ORM models
# class User(Base):
#     """User model"""
#     __tablename__ = "users"

#     id = Column(UUID, primary_key=True, default=uuid4)
#     username = Column(String(50), unique=True, nullable=False)
#     email = Column(String(100), unique=True, nullable=False)
#     password_hash = Column(String(255), nullable=False)
#     role = Column(String(50), nullable=False)
#     created_at = Column(DateTime, default=datetime.utcnow)


# class Store(Base):
#     """Store model"""
#     __tablename__ = "stores"

#     id = Column(UUID, primary_key=True, default=uuid4)
#     name = Column(String(100), nullable=False)
#     location_name = Column(String(100))
#     address = Column(String(255))
#     created_at = Column(DateTime, default=datetime.utcnow)


# class Camera(Base):
#     """Camera model"""
#     __tablename__ = "cameras"

#     id = Column(UUID, primary_key=True, default=uuid4)
#     store_id = Column(UUID, ForeignKey("stores.id"), nullable=False)
#     name = Column(String(100), nullable=False)
#     rtsp_url = Column(String(500), nullable=False)
#     stream_type = Column(String(50), nullable=False)
#     status = Column(String(50), default="inactive")
#     created_at = Column(DateTime, default=datetime.utcnow)


# class Event(Base):
#     """Event model"""
#     __tablename__ = "events"

#     id = Column(UUID, primary_key=True, default=uuid4)
#     camera_id = Column(UUID, ForeignKey("cameras.id"), nullable=False)
#     store_id = Column(UUID, ForeignKey("stores.id"), nullable=False)
#     event_type = Column(String(50), nullable=False)
#     severity = Column(String(50), nullable=False)
#     title = Column(String(200), nullable=False)
#     description = Column(String, nullable=True)
#     event_data = Column(JSONB, nullable=False)
#     trigger_timestamp = Column(DateTime, nullable=False)
#     created_at = Column(DateTime, default=datetime.utcnow)


# class Detection(Base):
#     """Detection model"""
#     __tablename__ = "detections"

#     id = Column(Integer, primary_key=True)
#     video_id = Column(UUID, ForeignKey("videos.id"), nullable=False)
#     camera_id = Column(UUID, ForeignKey("cameras.id"), nullable=False)
#     frame_number = Column(Integer, nullable=False)
#     timestamp = Column(DateTime, nullable=False)
#     person_count = Column(Integer, nullable=False)
#     detections = Column(JSONB, nullable=False)


# class Track(Base):
#     """Track model"""
#     __tablename__ = "tracks"

#     id = Column(Integer, primary_key=True)
#     camera_id = Column(UUID, ForeignKey("cameras.id"), nullable=False)
#     track_id = Column(Integer, nullable=False)
#     video_id = Column(UUID, ForeignKey("videos.id"), nullable=False)
#     start_frame = Column(Integer, nullable=False)
#     end_frame = Column(Integer, nullable=True)
#     duration_seconds = Column(DECIMAL(10, 2), nullable=True)
#     centroid_path = Column(JSONB, nullable=True)
