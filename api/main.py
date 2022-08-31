from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from routers import (
    restaurants as psql_restaurants,
    locations as psql_locations,
)

app = FastAPI()

origins = [
    "http://localhost:3000",
    os.environ.get("CORS_HOST", None),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# PostgreSQL endpoints
app.include_router(psql_restaurants.router)
app.include_router(psql_locations.router)