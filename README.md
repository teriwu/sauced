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

person wants to eat right now and wants food in their location
person wants to pick a location to plan a resturant visit

## Functionality

* Create points of interest (each of these are a **microservice**) (!!expand on this!!)
    * Locations (root) (!!is there a set default location?!!)
    * Restaurants (does not need to take reservations) (!!categorory of resturant!!)
        * Provide links 
    * Accounts (to keep track of favorite places) (!!owner vs reviewer!!)
        * People signed in can create a review ("POST")
* Users can view the details of each restaurants
    * Restaurants (provide info about restaurant) - cuisine type, pricing(?), about
* Users can search ("GET") locations
    * **IF** there is an API for it
    * **ELSE** make the developers make the locations
* Users can write/read reviews on a restaurant
* search bar for locating food(!!specify how the searach would work (location(zip etc...), near by, tags(types of food), etc)!!)

## API Sources

* Multiple sources
    * https://rapidapi.com/blog/best-travel-apis-guide/
    * https://devdevshow.com/javascript-api-project-ideas-for-beginners-with-source-code/
* https://openweathermap.org/current#
* https://www.yelp.com/developers/documentation/v3/get_started

## Design

* [API design](docs/apis.md)
* [Data model](docs/data-model.md)
* [GHI](docs/ghi.md)
* [Integrations](docs/integrations.md)

## Notes

* Pictures, such as logos, are located in **docs/wireframes/**
* Each group member will have their own API key

## Stretch 

* Navigation to business
* Bookmarks/Collections