# Backend Folder Structure - Complete Overview

## Summary

Created a production-ready FastAPI backend structure for the AI-Powered Store Intelligence System with:

✅ **63 files and 10 directories**
✅ All placeholder files with TODO comments for implementation
✅ Complete modular architecture
✅ Docker and Docker Compose setup
✅ Testing framework ready
✅ Environment configuration template

---

## Directory Structure

```
backend/
├── app/                          # Application code
│   ├── __init__.py              # Package marker
│   ├── main.py                  # FastAPI entry point
│   ├── config.py                # Configuration management
│   ├── dependencies.py          # Dependency injection
│   │
│   ├── api/                     # API routes
│   │   ├── __init__.py
│   │   └── v1/
│   │       ├── __init__.py
│   │       ├── auth.py          # Authentication endpoints
│   │       ├── feeds.py         # Video feed endpoints
│   │       ├── events.py        # Event management endpoints
│   │       ├── analytics.py     # Analytics endpoints
│   │       ├── configs.py       # Configuration endpoints
│   │       ├── health.py        # Health check endpoints
│   │       └── websocket.py     # WebSocket endpoints
│   │
│   ├── services/                # Business logic layer
│   │   ├── __init__.py
│   │   ├── video_ingestion.py   # Video stream handling
│   │   ├── detection.py         # YOLOv8 detection service
│   │   ├── tracking.py          # ByteTrack tracking service
│   │   ├── event_generator.py   # Event creation logic
│   │   ├── alert_service.py     # Notifications
│   │   ├── analytics_engine.py  # Analytics computation
│   │   ├── cache_service.py     # Redis caching
│   │   └── message_broker.py    # RabbitMQ integration
│   │
│   ├── models/                  # Data models
│   │   ├── __init__.py
│   │   ├── database.py          # SQLAlchemy ORM models
│   │   ├── schemas.py           # Pydantic validation schemas
│   │   └── enums.py             # Enumerations
│   │
│   ├── database/                # Data persistence
│   │   ├── __init__.py
│   │   ├── connection.py        # DB connection pool
│   │   ├── crud.py              # CRUD operations
│   │   └── migrations/
│   │       └── README.md        # Alembic migrations
│   │
│   ├── ml/                      # Machine learning
│   │   ├── __init__.py
│   │   ├── yolo_detector.py     # YOLOv8 wrapper
│   │   ├── bytetrack.py         # ByteTrack wrapper
│   │   ├── utils.py             # ML preprocessing/postprocessing
│   │   └── models/
│   │       └── README.md        # Model artifacts storage
│   │
│   ├── utils/                   # Utilities
│   │   ├── __init__.py
│   │   ├── logger.py            # Logging setup
│   │   ├── decorators.py        # Custom decorators
│   │   ├── validators.py        # Input validation
│   │   ├── security.py          # Auth & security utilities
│   │   └── constants.py         # Application constants
│   │
│   └── exceptions/              # Custom exceptions
│       ├── __init__.py
│       └── custom_exceptions.py # Exception classes
│
├── tests/                       # Test suite
│   ├── __init__.py
│   ├── conftest.py             # Pytest configuration & fixtures
│   │
│   ├── unit/                   # Unit tests
│   │   ├── __init__.py
│   │   ├── test_detection.py
│   │   ├── test_tracking.py
│   │   └── test_event_generator.py
│   │
│   ├── integration/            # Integration tests
│   │   ├── __init__.py
│   │   ├── test_api_endpoints.py
│   │   └── test_database.py
│   │
│   └── e2e/                    # End-to-end tests
│       ├── __init__.py
│       └── test_full_pipeline.py
│
├── requirements.txt            # Production dependencies
├── requirements-dev.txt        # Development dependencies
├── Dockerfile                  # Docker image definition
├── docker-compose.yml          # Docker Compose orchestration
├── .env.example               # Environment template
├── .gitignore                 # Git ignore rules
├── README.md                  # Backend documentation
└── .dockerignore              # Docker ignore rules

```

---

## File Descriptions

### Core Application Files

| File | Purpose |
|------|---------|
| `main.py` | FastAPI app factory and configuration |
| `config.py` | Pydantic settings management |
| `dependencies.py` | Dependency injection setup |

### API Routes (api/v1/)

| Module | Endpoints |
|--------|-----------|
| `auth.py` | Login, refresh token, logout, current user |
| `feeds.py` | Cameras, live streams, video history |
| `events.py` | List, get, acknowledge, resolve events |
| `analytics.py` | Dashboard, people count, peak hours, heatmap |
| `configs.py` | Detection settings, alert rules |
| `health.py` | Health checks and metrics |
| `websocket.py` | Real-time event streaming |

### Services (services/)

| Service | Responsibility |
|---------|-----------------|
| `video_ingestion.py` | RTSP/MJPEG stream handling |
| `detection.py` | YOLOv8 person detection |
| `tracking.py` | ByteTrack multi-object tracking |
| `event_generator.py` | Business event creation |
| `alert_service.py` | Alert notifications (email, SMS, webhook) |
| `analytics_engine.py` | Analytics computation & insights |
| `cache_service.py` | Redis caching layer |
| `message_broker.py` | RabbitMQ async task queue |

### Data Models (models/)

| File | Contains |
|------|----------|
| `database.py` | SQLAlchemy ORM models (User, Store, Camera, Event, etc.) |
| `schemas.py` | Pydantic validation schemas (request/response DTOs) |
| `enums.py` | Event types, severity levels, statuses |

### Database (database/)

| File | Purpose |
|------|---------|
| `connection.py` | PostgreSQL async connection pool |
| `crud.py` | Create, Read, Update, Delete operations |
| `migrations/` | Alembic database schema migrations |

### ML Models (ml/)

| File | Purpose |
|------|---------|
| `yolo_detector.py` | YOLOv8 detection wrapper |
| `bytetrack.py` | ByteTrack tracking wrapper |
| `utils.py` | Preprocessing, postprocessing utilities |
| `models/` | YOLOv8 model weights storage |

### Utilities (utils/)

| File | Purpose |
|------|---------|
| `logger.py` | Structured logging setup |
| `decorators.py` | Rate limiting, caching, timing decorators |
| `validators.py` | Input validation helpers |
| `security.py` | JWT, password hashing, RBAC |
| `constants.py` | Application constants |

### Tests (tests/)

| Directory | Type |
|-----------|------|
| `unit/` | Unit tests for individual components |
| `integration/` | Integration tests for APIs and DB |
| `e2e/` | End-to-end system tests |
| `conftest.py` | Pytest fixtures |

---

## Technology Stack

### Framework & Server
- **FastAPI** - Modern web framework
- **Uvicorn** - ASGI server
- **Pydantic** - Data validation

### Database
- **PostgreSQL** - Primary database
- **SQLAlchemy** - ORM
- **Alembic** - Schema migrations
- **asyncpg** - Async PostgreSQL driver

### Cache & Queue
- **Redis** - Caching layer
- **RabbitMQ** - Message broker
- **Celery** - Task queue

### ML & Computer Vision
- **PyTorch** - Deep learning
- **Ultralytics YOLOv8** - Object detection
- **ByteTrack** - Multi-object tracking
- **OpenCV** - Video processing
- **NumPy/Pandas** - Data processing

### Authentication & Security
- **PyJWT** - JWT tokens
- **Passlib** - Password hashing
- **python-jose** - Security tokens

### Testing
- **Pytest** - Test framework
- **pytest-asyncio** - Async test support
- **pytest-cov** - Code coverage

### Code Quality
- **Black** - Code formatter
- **isort** - Import sorting
- **Flake8** - Linter
- **MyPy** - Type checking

### Deployment
- **Docker** - Containerization
- **Docker Compose** - Local orchestration

---

## Quick Start Commands

### Development Setup
```bash
# Clone and setup
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements-dev.txt

# Environment setup
cp .env.example .env

# Run with Docker Compose
docker-compose up -d

# Run tests
pytest
```

### Development Server
```bash
# Hot-reload development mode
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Or with Python
python app/main.py
```

### API Documentation
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

### Testing
```bash
pytest                              # Run all tests
pytest --cov=app                   # With coverage
pytest tests/unit/                 # Unit tests only
pytest -v                          # Verbose output
```

### Code Quality
```bash
black app tests
isort app tests
flake8 app tests
mypy app
```

---

## Implementation Checklist

### Phase 1: Foundation
- [ ] Database connection and ORM setup
- [ ] Authentication system
- [ ] User and store management

### Phase 2: ML Integration
- [ ] YOLOv8 detection service
- [ ] ByteTrack tracking service
- [ ] Video ingestion service

### Phase 3: Business Logic
- [ ] Event generator implementation
- [ ] Alert service setup
- [ ] Analytics engine

### Phase 4: API Development
- [ ] REST endpoint implementation
- [ ] WebSocket real-time updates
- [ ] Request validation

### Phase 5: Testing & Deployment
- [ ] Unit test implementation
- [ ] Integration tests
- [ ] Docker deployment

---

## Next Steps

1. **Implement Database Models** - Uncomment and complete ORM models in `models/database.py`
2. **Setup Services** - Implement service classes with actual business logic
3. **Create API Endpoints** - Uncomment and implement route handlers
4. **Add Tests** - Implement test cases with actual test data
5. **Run Development Server** - Start with `docker-compose up`

All files are ready with TODO comments indicating where implementation is needed.

