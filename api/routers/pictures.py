from fastapi import APIRouter, Depends, Response, status
from db import PictureQueries
from models.pictures import (
    PictureIn,
    PictureOut,
    PictureList,
    PictureDeleteOperation,
)

router = APIRouter()


@router.post("/api/pictures", response_model=PictureOut, tags=["Pictures"])
def create_picture(picture: PictureIn, queries: PictureQueries = Depends()):
    queries.create_picture(picture)


@router.get("/api/pictures", response_model=PictureList, tags=["Pictures"])
def get_pictures(queries: PictureQueries = Depends()):
    return {
        "pictures": queries.get_pictures(),
    }


@router.get("/api/pictures/{id}", response_model=PictureOut, tags=["Pictures"])
def get_picture(id: int, response: Response, queries: PictureQueries = Depends()):
    record = queries.get_picture(id)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.put("/api/pictures/{id}", response_model=PictureOut, tags=["Pictures"])
def update_picture(
    picture_id: int,
    picture_in: PictureIn,
    response: Response,
    queries: PictureQueries = Depends()
):
    record = queries.update_picture(picture_id, picture_in)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.delete("/api/pictures/{id}", response_model=PictureDeleteOperation, tags=["Pictures"])
def delete_picture(picture_id: int, queries: PictureQueries = Depends()):
    try:
        queries.delete_picture(picture_id)
        return {"result": True}
    except:
        return {"result": False}
