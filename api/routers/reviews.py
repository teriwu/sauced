from fastapi import APIRouter, Depends, Response
from db import ReviewQueries
from models.reviews import (
    ReviewIn,
    ReviewOut,
    ReviewList,
    ReviewDeleteOperation)

router = APIRouter()


@router.get("/api/reviews/restaurants/{id}", response_model=ReviewList, tags=["Reviews"])
def reviews_list(id: int, queries: ReviewQueries = Depends()):
    return {
        "reviews": queries.get_reviews(id),
    }


@router.get("/api/reviews/{id}", response_model=ReviewOut, tags=["Reviews"])
def get_review(
    id: int,
    response: Response, queries: ReviewQueries = Depends()
):
    record = queries.get_review(id)
    if record is None:
        response.status_code = 404
    else:
        print("🚀 ~ file: reviews.py ~ line 28 ~ record", record)
        return record


@router.post("/api/reviews", response_model=ReviewOut, tags=["Reviews"])
def create_review(review: ReviewIn, queries: ReviewQueries = Depends()):
    return queries.create_review(review)


@router.put("/api/reviews/{id}", response_model=ReviewOut, tags=["Reviews"])
def update_review(
    review_id: int,
    review_in: ReviewIn,
    response: Response,
    queries: ReviewQueries = Depends(),
):
    record = queries.update_review(review_id, review_in)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.delete(
    "/api/reviews/{id}", response_model=ReviewDeleteOperation, tags=["Reviews"]
)
def delete_review(review_id: int, queries: ReviewQueries = Depends()):
    try:
        queries.delete_review(review_id)
        return {"result": True}
    except Exception:
        return {"result": False}
