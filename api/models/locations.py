from pydantic import BaseModel
from typing import Optional

class LocationIn(BaseModel):
    address: str
    city: str
    zip_code: int
    country: str
    state: str

class LocationOut(BaseModel):
    id: int
    address: str
    city: str
    zip_code: int
    country: str
    state: str

class LocationList(BaseModel):
    # page_count: int
    locations: list[LocationOut]

class LocationDeleteOperation(BaseModel):
    result: bool