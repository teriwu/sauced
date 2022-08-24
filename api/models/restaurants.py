from pydantic import BaseModel
from .locations import LocationOut
from .categories import CategoryOut
from .hours import HourOut
from .pictures import PictureOut


class RestaurantIn(BaseModel):
    price: str
    rating: int
    name: str
    phone: str
    location_id: list[LocationOut]
    category_id: list[CategoryOut]
    hour_id: list[HourOut]
    picture_id: list[PictureOut]


class RestaurantOut(BaseModel):
    id: int
    price: str
    rating: float
    name: str
    phone: str
    location_id: list[LocationOut]
    category_id: list[CategoryOut]
    hour_id: list[HourOut]
    picture_id: list[PictureOut]


class RestaurantList(BaseModel):
    page_count: int
    restaurants: list[RestaurantOut]


# Potentially make Delete