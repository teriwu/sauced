from fastapi import FastAPI
from fastapi.testclient import TestClient
from main import app
from db import RestaurantQueries

client = TestClient(app)


# Lakhvinder's test
class EmptyRestaurantQueries:
    def get_restaurant(self, id):
        return None


# Lakhvinder's test


class NormalRestaurantQueries:
    def get_restaurant(self, id):
        return [id, "OUR RESTAURANT", True]


# Teri's test 😊
def test_get_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Lost": "sauce"}


# Works with the default dummy data
def test_get_restaurant():
    response = client.get(
        "/api/restaurants/1", headers={"Content-Type": "application/json"}
    )
    assert response.status_code == 200
    assert response.json() == {
        "id": 1,
        "price": "string",
        "rating": 0.0,
        "name": "string",
        "phone": "string",
        "address": "string",
        "city": "string",
        "zip_code": 0,
        "country": "string",
        "state": "string",
        "start_": "string",
        "end_": "string",
        "day": "string",
        "picture": "string",
    }


# End of Teri's test


# Lakhvinder's test
def test_get_restaurant_returns_404():
    # ARRANGE
    # Use our fake database
    app.dependency_overrides[RestaurantQueries] = EmptyRestaurantQueries
    # ACT
    # Make the request
    response = client.get("/api/restaurants/1")
    # ASSERT
    # Assert that we got a 404
    assert response.status_code == 404
    # CLEAN UP
    # Clear out the dependencies
    app.dependency_overrides = {}


# Lakhvinder's test


# def test_get_category_returns_200():
#     # ARRANGE
#     app.dependency_overrides[RestaurantQueries] = NormalRestaurantQueries
#     # ACT
#     response = client.get("/api/restaurants/1")
#     d = response.json()
#     # ASSERT
#     assert response.status_code == 200
#     assert d["id"] == 1
#     assert d["price"] == "OUR CATEGORY"
#     assert d["rating"] == 2
#     assert d["name"] == "Carls"
#     assert d["phone"] == "123-456-7980"
#     assert d["address"] == "123 street"
#     assert d["city"] == "Sacramento"
#     assert d["zip_code"] == 2
#     assert d["country"] == "USA"
#     assert d["state"] == "Cali"
#     assert d["start_"] == "1"
#     assert d["end_"] == "2"
#     assert d["day"] == "Wed"
#     assert d["picture"] == ".com"
#     # CLEAN UP
#     app.dependency_overrides = {}
