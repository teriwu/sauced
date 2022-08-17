# Name of App here

Group 11 Members
* Benny Huang
* Jacob Kim
* Lakhvinder Dhanoya
* Ryan Spurlock
* Teresa Wu

One stop shop for all your traveling info and booking needs.

## Intended market

People who enjoy traveling or would like to explore a new local place. For Travelers who are already at their destination and could receive more information about their current location.

## Functionality

* Create points of interest (each of these are a **microservice**)
    * Locations (root)
    * Restaurants (does not need to take reservations)
        * Provide links 
    * Accounts (to keep track of favorite places)
        * People signed in can create a review ("POST")
* Users can view the details of each restaurants
    * Restaurants (provide info about restaurant) - cuisine type, pricing(?), about
* Users can search ("GET") locations
    * **IF** there is an API for it
    * **ELSE** make the developers make the locations

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