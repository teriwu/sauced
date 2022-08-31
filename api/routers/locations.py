from fastapi import APIRouter, Depends, Response, status
from db import LocationQueries
from models.locations import(
    LocationIn,
    LocationOut,
    LocationList,
    LocationDeleteOperation
)

router = APIRouter()

@router.get("/api/locations", response_model=LocationList, tags=["Locations"])
def locations_list(queries: LocationQueries = Depends()):
    return {
        "locations": queries.get_locations(),
    }

@router.get("/api/locations/{id}", response_model=LocationOut, tags=["Locations"])
def get_location(id: int, response: Response, queries: LocationQueries = Depends()):
    record = queries.get_location(id)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.post("/api/locations", response_model=LocationOut, tags=["Locations"])
def create_location(location: LocationIn, queries: LocationQueries = Depends()):
    return queries.create_location(location)

@router.put("/api/locations/{id}", response_model = LocationOut, tags =["Locations"])
def update_location(
    location_id: int,
    location_in: LocationIn,
    response: Response,
    queries: LocationQueries = Depends(),
):
    record = queries.update_location(location_id, location_in)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.delete("/api/locations/{id}", response_model=LocationDeleteOperation, tags=["Locations"])
def delete_location(location_id: int, queries: LocationQueries = Depends()):
    try:
        queries.delete_location(location_id)
        return {"result": True}
    except:
        return {"result": False}