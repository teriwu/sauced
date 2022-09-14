import { useState, useEffect, useContext } from 'react';
import { MainContext } from './MainContext';
import { Link } from 'react-router-dom';


function RestaurantList({setRestaurant}) {
    const { matchingResults, dataArr } = useContext(MainContext);
    const [pageLoaded, setPageLoaded] = useState(false);
    const handleRefresh = () => {
        window.location.reload(); 
    }
    useEffect(() => {
        pageLoaded !== false ? handleRefresh() 
        : setPageLoaded(true)
        setPageLoaded(false)
    }, [])
    return (
        <>
        <div className="container mt-5">
            <h1>Restaurants</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.restaurants.map(restaurant => {
                        return (
                            <tr key={restaurant.id}>
                                <td><img src={restaurant.picture} height="150" width="150"/></td>
                                <td>{ restaurant.name }</td>
                                <td>{ restaurant.city }</td>
                                <td>{ restaurant.price }</td>
                                <td>{ restaurant.rating }</td>
                                <td><Link to="/map" className="btn btn-info btn-sm px-4 gap-3">Get directions</Link></td>
                                <td><Link to="/reviews/new" className="btn btn-info btn-sm px-4 gap-3">Write a Review</Link></td>
                            </tr>
                        )
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}
export default RestaurantList
