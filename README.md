# Name of App here

Group 11 Members
* Benny Huang
* Jacob Kim
* Lakhvinder Dhanoya
* Ryan Spurlock
* Teresa Wu

One stop shop for all your restaurant info

## Intended market

People who enjoy discovering new and exciting restaurants at a specific location. 

## Functionality

* Create points of interest (each of these are a **microservice**) 
    * Locations (root) (!!is there a set default location?!!)
        * users can search for suggestions near their current location
        * users can search for suggestions near a specific location/destination
    * Restaurants (does not need to take reservations) 
        * Information about the restaurant such as about, category, *price, review, *location
    * Accounts (to keep track of favorite places) 
        * users signed in can create/edit their own review ("POST")
        * business owners can register their restaurants (!!respond to reviews!!)
* Users can view the details of each restaurants
    * Restaurants (provide info about restaurant) - cuisine type, pricing(?), about
* Locating restaurants using Google Maps
    * users can search by location(zip code, city, *near by, tags)
    * autocomplete feature helps users find exact locations
    * start and end point that can calculate the distance and travel time
    * select different travel modes to their preferred method of transportation

## Getting Started
```
clone the repository
cd into the new project directory
docker volume create postgres-data
docker-compose build
docker-compose up
```

## API Sources

* Multiple sources
    * https://rapidapi.com/blog/best-travel-apis-guide/
    * https://devdevshow.com/javascript-api-project-ideas-for-beginners-with-source-code/
* https://openweathermap.org/current#
* https://www.yelp.com/developers/documentation/v3/get_started
* https://developers.google.com/maps/documentation/javascript/get-api-key

## Design

* [API design](docs/apis.md)
* [Data model](docs/data-model.md)
* [GHI](docs/ghi.md)
* [Integrations](docs/integrations.md)

## Notes

* Pictures, such as logos, are located in **docs/wireframes/**
* Each group member will have their own API key

## Stretch 

* Bookmarks/Collections