from unicodedata import category
from pydantic import BaseModel
from typing import Optional

from .locations import LocationOut
from .categories import CategoriesOut
from .hours import HourOut
from .pictures import PictureOut


class RestaurantIn(BaseModel): #POST
    price: str
    rating: float
    name: str
    phone: str
    address: str
    city: str
    zip_code: int
    country: str
    state: str
    start_: str
    end_: str
    day: str
    picture: str

    


class RestaurantOut(BaseModel): # GET
    id: int
    price: str
    rating: float
    name: str
    phone: str
    address: str
    city: str
    zip_code: int
    country:str
    state: str
    start_: str
    end_: str
    day: str
    picture: str
    # location_id: LocationOut
    # category_id: CategoriesOut
    # hour_id: HourOut
    # picture_id: PictureOut


class RestaurantList(BaseModel):
    # page_count: int
    restaurants: list[RestaurantOut]


class RestaurantDeleteOperation(BaseModel):
    result: bool
