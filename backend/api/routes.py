from fastapi import APIRouter
from typing import List

# Create the main router
router = APIRouter()

# Import and include other route modules
# from .routes import users, investments, trading, analysis

# Example endpoint
@router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "AI Investment Assistant API"} 