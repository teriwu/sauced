from fastapi import APIRouter, Depends, Response, status
from models.restaurants import(
    RestaurantIn,
    RestaurantList,
    RestaurantOut
)


router = APIRouter()

