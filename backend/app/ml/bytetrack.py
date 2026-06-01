"""
ByteTrack multi-object tracker wrapper
"""

# TODO: Implement ByteTrack wrapper
# - Initialize tracker
# - Update with detections
# - Get tracks
# - Calculate trajectories

# from bytetrack.byte_tracker import BYTETracker
# from app.config import settings


# class ByteTracker:
#     """ByteTrack multi-object tracker"""

#     def __init__(self):
#         """Initialize ByteTrack tracker"""
#         self.tracker = BYTETracker(
#             track_thresh=settings.CONFIDENCE_THRESHOLD,
#             track_buffer=30,
#             match_thresh=0.9,
#         )

#     def update(self, detections):
#         """Update tracker with detections"""
#         online_targets = self.tracker.update(detections)
#         return online_targets

#     def get_active_tracks(self) -> list:
#         """Get active tracks"""
#         return self.tracker.tracked_stracks

#     def reset(self):
#         """Reset tracker"""
#         self.tracker.reset()
