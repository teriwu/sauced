import React, { useEffect, useContext } from 'react';
import { MainContext } from './MainContext';
import { Link } from 'react-router-dom';

function RestaurantList() {

    const { matchingResults, dataArr } = useContext(MainContext);

    return (
        <>
        {console.log("Hello", dataArr)}
        <h1>Restaurants</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {matchingResults.length !==0 ? matchingResults.map(restaurant => {
                    return (
                        <tr key={restaurant.id}>
                            <td><img src={restaurant.picture}  width="150"/></td>
                            <td>{ restaurant.name }</td>
                            <td>{ restaurant.city }</td>
                            <td>{ restaurant.price }</td>
                            <td>{ restaurant.rating }</td>
                            <td><Link to="" className="btn btn-info btn-sm px-4 gap-3">Get directions</Link></td>
                            <td><Link to="/reviews/new" className="btn btn-info btn-sm px-4 gap-3">Write a Review</Link></td>
                        </tr>)
                    
                }) : dataArr.map(restaurant => {
                    return (
                        <tr key={restaurant.id}>
                            <td><img src={restaurant.picture}  width="150"/></td>
                            <td>{ restaurant.name }</td>
                            <td>{ restaurant.city }</td>
                            <td>{ restaurant.price }</td>
                            <td>{ restaurant.rating }</td>
                            <td><Link to="" className="btn btn-info btn-sm px-4 gap-3">Get directions</Link></td>
                            <td><Link to="/reviews/new" className="btn btn-info btn-sm px-4 gap-3">Write a Review</Link></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default RestaurantList