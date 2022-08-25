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
    # price: str
    # rating: float
    # name: str
    # phone: str



class RestaurantList(BaseModel):
    page_count: int
    restaurants: list[RestaurantOut]


# Potentially make Delete