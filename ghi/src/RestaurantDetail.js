import React, {useContext} from "react";
import { MainContext } from "./MainContext"; 
//import { Link } from 'react-router-dom';

function RestaurantDetail(){    

    const {dataArr, currentRestaurant} = useContext(MainContext);
    console.log(dataArr)
    
        return (
            <>
            <h1>{currentRestaurant.name}</h1>
            <h4> Rating {currentRestaurant.rating}</h4>
            <h6> Price:{currentRestaurant.price}</h6>
            <img src={currentRestaurant.picture} alt="restaurantimage" width="150"/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Open</th>
                        <th>Close</th>
                        
                    </tr>
                </thead>
                <tbody>
                    
                        <tr key={currentRestaurant.id}>
                            <td>{currentRestaurant.day }</td>
                            <td>{currentRestaurant.start_}</td>
                            <td>{currentRestaurant.end_}</td>
                            
                        </tr>
                        
                </tbody>
            </table>
            </>
        )
    }


export default RestaurantDetail