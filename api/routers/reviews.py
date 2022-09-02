from fastapi import APIRouter, Depends, Response, status
from db import ReviewQueries
from models.reviews import(
    ReviewIn,
    ReviewOut,
    ReviewList,
    ReviewDeleteOperation
)

router = APIRouter()

@router.get("/api/reviews", response_model=ReviewList, tags=["Reviews"])
def reviews_list(queries: ReviewQueries = Depends()):
    return {
        "reviews": queries.get_reviews(),
    }

@router.get("/api/reviews/{id}", response_model=ReviewOut, tags=["Reviews"])
def get_review(id: int, response: Response, queries: ReviewQueries = Depends()):
    record = queries.get_review(id)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.post("/api/reviews", response_model=ReviewOut, tags=["Reviews"])
def create_review(review: ReviewIn, queries: ReviewQueries = Depends()):
    return queries.create_review(review)