from optparse import Option
from pydantic import BaseModel
from typing import Optional

# from .locations import LocationOut
# from .categories import CategoryOut
# from .hours import HourOut
# from .pictures import PictureOut


class RestaurantIn(BaseModel): #POST
    price: str
    rating: int
    name: str
    phone: str



class RestaurantOut(BaseModel): # GET
    id: Optional[int]
    price: Optional[str]
    rating: Optional[float]
    name: Optional[str]
    phone: Optional[str]



class RestaurantList(BaseModel):
    # page_count: int
    restaurants: list[RestaurantOut]


class RestaurantDeleteOperation(BaseModel):
    result: bool