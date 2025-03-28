from pydantic_settings import BaseSettings
from functools import lru_cache

class Settings(BaseSettings):
    app_name: str = "AI Investment Assistant API"
    debug: bool = False
    supabase_url: str
    supabase_key: str
    cors_origins: list[str] = ["http://localhost:3000"]
    
    class Config:
        env_file = ".env"

@lru_cache()
def get_settings():
    return Settings() 