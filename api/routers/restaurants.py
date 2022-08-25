from fastapi import APIRouter, Depends, Response, status
from db import RestaurantQueries
from models.restaurants import(
    RestaurantIn,
    RestaurantList,
    RestaurantOut
)


router = APIRouter()

@router.get("/api/restaurants", response_model=RestaurantOut, tags=["Restaurants"])
def restaurants_list(queries: RestaurantQueries = Depends()):
    return {
        "restaurants": queries.get_restaurants(),
    }