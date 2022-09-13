import React, {useContext} from "react";
import { MainContext } from "./MainContext"; 
import { Link } from 'react-router-dom';

function RestaurantDetail(){    

    const {dataArr, currentRestaurant} = useContext(MainContext);
    
        return (
            <>
            <h1>Restaurants</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        
                    </tr>
                </thead>
                <tbody>
                    
                        <tr key={currentRestaurant.id}>
                            <td>{currentRestaurant.name }</td>
                            
                        </tr>
                        
                </tbody>
            </table>
            </>
        )
    }


export default RestaurantDetail