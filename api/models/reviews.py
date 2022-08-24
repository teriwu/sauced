from pydantic import BaseModel
from .users import UserOut
from .restaurants import RestaurantOut


class ReviewOut(BaseModel):
    id: int
    title: str
    content: str
    reviewer_id: list[UserOut]
    rating: float
    restaurant_id: list[RestaurantOut]


# class ReviewIn(BaseModel):
#     title: str
#     content: str
#     reviewer_id: list[UserOut]
#     rating: float
#     restaurant_id: list[RestaurantOut]


# class ReviewList(BaseModel)