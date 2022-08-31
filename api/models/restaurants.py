from unicodedata import category
from pydantic import BaseModel
from typing import Optional

from .locations import LocationOut
from .categories import CategoriesOut
from .hours import HourOut
from .pictures import PictureOut


class RestaurantIn(BaseModel): #POST
    price: str
    rating: int
    name: str
    phone: str

    


class RestaurantOut(BaseModel): # GET
    id: int
    price: str
    rating: float
    name: str
    phone: str
    # location_id: LocationOut
    # category_id: CategoriesOut
    hour_id: HourOut
    picture_id: PictureOut


class RestaurantList(BaseModel):
    # page_count: int
    restaurants: list[RestaurantOut]


class RestaurantDeleteOperation(BaseModel):
    result: bool
