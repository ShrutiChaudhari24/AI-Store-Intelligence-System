"""
Pydantic schemas for request/response validation
"""

from datetime import datetime
from typing import List, Optional
from uuid import UUID

# TODO: Import Pydantic
# from pydantic import BaseModel, Field, validator


# TODO: Define request/response schemas
# class UserBase(BaseModel):
#     """Base user schema"""
#     username: str
#     email: str
#     first_name: Optional[str] = None
#     last_name: Optional[str] = None


# class UserCreate(UserBase):
#     """User creation schema"""
#     password: str


# class UserResponse(UserBase):
#     """User response schema"""
#     id: UUID
#     role: str
#     created_at: datetime

#     class Config:
#         from_attributes = True


# class EventResponse(BaseModel):
#     """Event response schema"""
#     id: UUID
#     camera_id: UUID
#     event_type: str
#     severity: str
#     title: str
#     description: Optional[str]
#     trigger_timestamp: datetime
#     created_at: datetime

#     class Config:
#         from_attributes = True


# class DetectionResponse(BaseModel):
#     """Detection response schema"""
#     id: int
#     camera_id: UUID
#     frame_number: int
#     person_count: int
#     timestamp: datetime

#     class Config:
#         from_attributes = True


# class AnalyticsResponse(BaseModel):
#     """Analytics response schema"""
#     total_people_count: int
#     peak_hours: List[int]
#     crowd_events: int
#     avg_dwell_time: float
