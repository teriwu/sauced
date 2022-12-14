from pydantic import BaseModel
from typing import Optional


class RestaurantIn(BaseModel):  # POST
    price: str
    rating: Optional[float]
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


class RestaurantOut(BaseModel):  # GET
    id: int
    price: str
    rating: Optional[float]
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
    # location_id: LocationOut
    # category_id: CategoriesOut
    # hour_id: HourOut
    # picture_id: PictureOut


class RestaurantList(BaseModel):
    # page_count: int
    restaurants: list[RestaurantOut]


class RestaurantDeleteOperation(BaseModel):
    result: bool
