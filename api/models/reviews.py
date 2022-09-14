from pydantic import BaseModel
from models.restaurants import RestaurantOut

class ReviewIn(BaseModel):
    title: str
    content: str
    post_date: str
    rating: int
    restaurant_id: int


class ReviewOut(BaseModel):
    id: int
    title: str
    content: str
    post_date: str
    rating: int
    restaurant: RestaurantOut
    


class ReviewList(BaseModel):
    reviews: list[ReviewOut]

class ReviewDeleteOperation(BaseModel):
    result: bool