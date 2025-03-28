from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from utils.supabase import supabase

app = FastAPI()

# Configure CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/test-connection")
async def test_connection():
    try:
        # Simple health check using a basic query instead of RPC
        response = supabase.table('users').select('*').limit(1).execute()
        return {"status": "success", "message": "Successfully connected to Supabase!"}
    except Exception as e:
        return {"status": "error", "message": str(e)} 