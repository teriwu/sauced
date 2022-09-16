import { useContext, useEffect, useState } from 'react';
import { MainContext } from './MainContext';
import { Link } from 'react-router-dom';


function RestaurantList() {
    const { matchingResults, dataArr, setRestaurant } = useContext(MainContext);
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
        <div className="container">
            <h1>Restaurants</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {matchingResults.length !==0 ? matchingResults.map(restaurant => {
                        return (
                            <tr onClick={() => {setRestaurant(restaurant)}} key={restaurant.id}>
                                <td><Link to="/restaurants/detail"><img src={restaurant.picture}  width="150"/></Link></td>
                                <td>
                                <Link to="/restaurants/detail">
                                    { restaurant.name }
                                </Link>
                                </td>      
                                <td>{ restaurant.city }</td>
                                <td>{ restaurant.price }</td>
                                <td><Link to="/map" className="btn btn-info btn-sm px-4 gap-3">Get directions</Link></td>
                                <td><Link to="/reviews/new" className="btn btn-info btn-sm px-4 gap-3">Write a Review</Link></td>
                            </tr>
                        )
                    }) : dataArr.map(restaurant => {
                        return (
                            <tr onClick={() => {setRestaurant(restaurant)}} key={restaurant.id}>
                                <td><Link to="/restaurants/detail"><img src={restaurant.picture}  width="150"/></Link></td>
                                <td>
                                <Link to="/restaurants/detail">
                                    { restaurant.name }
                                </Link>
                                </td>    
                                <td>{ restaurant.city }</td>
                                <td>{ restaurant.price }</td>
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

export default RestaurantList;
