from fastapi import APIRouter, Depends, Response, status
from db import RestaurantQueries
from models.restaurants import(
    RestaurantIn,
    RestaurantList,
    RestaurantOut
)


router = APIRouter()

@router.get("/api/restaurants", response_model=RestaurantList, tags=["Restaurants"])
def restaurants_list(queries: RestaurantQueries = Depends()):
    return {
        "restaurants": queries.get_restaurants(),
    }


@router.get("/api/restaurants/{id}", response_model=RestaurantOut, tags=["Restaurants"])
def get_restaurant(id: int, response: Response, queries: RestaurantQueries = Depends()):
    record = queries.get_restaurant(id)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.post("/api/restaurants", response_model=RestaurantOut, tags=["Restaurants"])
def create_restaurant(restaurant: RestaurantIn, queries: RestaurantQueries = Depends()):
    return queries.create_restaurant(restaurant)

@router.put("/api/restaurants/{id}", response_model = RestaurantOut, tags =["Restaurants"])
def update_restaurant(
    restaurant_id: int,
    restaurant_in: RestaurantIn,
    response: Response,
    queries: RestaurantQueries = Depends(),
):
    record = queries.update_restaurant(restaurant_id, restaurant_in)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.delete("/api/restaurants/{id}", response_model=bool, tags=["Restaurants"])
def delete_restaurant(restaurant_id: int, queries: RestaurantQueries = Depends()):
    queries.delete_restaurant(restaurant_id)
    return True