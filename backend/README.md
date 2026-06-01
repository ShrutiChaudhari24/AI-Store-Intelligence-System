# Backend Backend Structure

Backend folder structure for AI-Powered Store Intelligence System.

## Quick Start

### Prerequisites
- Python 3.11+
- PostgreSQL 14+
- Redis 7+
- RabbitMQ 3.12+
- CUDA 11.8+ (for GPU acceleration, optional)

### Setup

1. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Setup environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Database migrations**
   ```bash
   alembic upgrade head
   ```

5. **Run development server**
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

### Docker Setup

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f backend

# Stop services
docker-compose down
```

## Directory Structure

- **app/** - Application code
  - **api/** - API route handlers
  - **services/** - Business logic layer
  - **models/** - Database models and schemas
  - **database/** - Database operations and CRUD
  - **ml/** - ML models and utilities
  - **utils/** - Helper utilities
  - **exceptions/** - Custom exceptions
- **tests/** - Test suite
  - **unit/** - Unit tests
  - **integration/** - Integration tests
  - **e2e/** - End-to-end tests

## API Documentation

Once the server is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Development

### Code Style
```bash
# Format code
black app tests

# Sort imports
isort app tests

# Lint code
flake8 app tests
mypy app
```

### Testing
```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=app

# Run specific test
pytest tests/unit/test_detection.py::TestYOLODetection::test_detect_single_frame
```

## Production Deployment

- Kubernetes manifests (see `../../k8s/` folder)
- Docker images (multi-stage builds included)
- Environment-specific `.env` files
- Database migrations (Alembic)
- Monitoring and health checks

