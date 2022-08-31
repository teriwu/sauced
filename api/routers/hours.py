from fastapi import APIRouter, Depends, Response, status
from db import HourQueries
from models.hours import(
    HourIn,
    HourList,
    HourOut,
    HourDeleteOperation
)

router = APIRouter()

@router.get("/api/hours", response_model=HourList, tags=["Hours"])
def hours_list(queries: HourQueries = Depends()):
    return {
        "hours": queries.get_hours(),
    }

@router.get("/api/hours/{id}", response_model=HourOut, tags=["Hours"])
def get_hour(id: int, response: Response, queries: HourQueries = Depends()):
    record = queries.get_hour(id)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.post("/api/hours", response_model=HourOut, tags=["Hours"])
def create_hour(hour: HourIn, queries: HourQueries = Depends()):
    return queries.create_hour(hour)

@router.put("/api/hours/{id}", response_model = HourOut, tags = ["Hours"])
def update_hour(
    hour_id: int,
    hour_in: HourIn,
    response: Response,
    queries: HourQueries = Depends(),
):
    record = queries.update_hour(hour_id, hour_in)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.delete("/api/hours/{id}", response_model=HourDeleteOperation, tags=["Hours"])
def delete_hour(hour_id: int, queries: HourQueries = Depends()):
    try:
        queries.delete_hour(hour_id)
        return {"result": True}
    except:
        return {"result": False}
