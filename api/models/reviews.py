from pydantic import BaseModel
from datetime import datetime

class ReviewIn(BaseModel):
    title: str
    content: str
    post_date: str
    rating: int


class ReviewOut(BaseModel):
    id: int
    title: str
    content: str
    post_date: str
    rating: int


class ReviewList(BaseModel):
    reviews: list[ReviewOut]

class ReviewDeleteOperation(BaseModel):
    result: bool