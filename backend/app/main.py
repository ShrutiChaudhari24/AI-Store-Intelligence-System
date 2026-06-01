"""
FastAPI application entry point for Store Intelligence System
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# TODO: Import routers when ready
# from app.api.v1 import auth, feeds, events, analytics, configs, health, websocket


def create_app() -> FastAPI:
    """Create and configure FastAPI application"""
    app = FastAPI(
        title="AI Store Intelligence System",
        description="Real-time CCTV analysis platform for retail store optimization",
        version="0.1.0",
    )

    # TODO: Add CORS middleware configuration
    # app.add_middleware(
    #     CORSMiddleware,
    #     allow_origins=settings.ALLOWED_ORIGINS,
    #     allow_credentials=True,
    #     allow_methods=["*"],
    #     allow_headers=["*"],
    # )

    # TODO: Include routers
    # app.include_router(auth.router, prefix="/api/v1/auth", tags=["auth"])
    # app.include_router(feeds.router, prefix="/api/v1/feeds", tags=["feeds"])
    # app.include_router(events.router, prefix="/api/v1/events", tags=["events"])
    # app.include_router(analytics.router, prefix="/api/v1/analytics", tags=["analytics"])
    # app.include_router(configs.router, prefix="/api/v1/config", tags=["config"])
    # app.include_router(health.router, prefix="/api/v1/health", tags=["health"])

    # TODO: Add event handlers
    # @app.on_event("startup")
    # async def startup():
    #     pass

    # @app.on_event("shutdown")
    # async def shutdown():
    #     pass

    return app


app = create_app()


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info",
    )
