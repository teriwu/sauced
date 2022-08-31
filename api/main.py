from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from routers import (
    restaurants as psql_restaurants,
<<<<<<< HEAD
    categories as psql_categories,
=======
    locations as psql_locations,
>>>>>>> 17555340db2adf5bcc9af04f63e97c318a7910eb
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
<<<<<<< HEAD
app.include_router(psql_categories.router)
=======
app.include_router(psql_locations.router)
>>>>>>> 17555340db2adf5bcc9af04f63e97c318a7910eb
