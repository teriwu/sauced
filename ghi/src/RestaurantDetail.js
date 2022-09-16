import React, {useContext, useEffect, useState} from "react";
import { MainContext } from "./MainContext"; 

import { Link } from 'react-router-dom';





function RestaurantDetail(){    

    const {dataArr, currentRestaurant} = useContext(MainContext);
    console.log(currentRestaurant, "asdfasdf")
    
    const [reviews, setReviews] = useState([]);
   

    
    
    useEffect(() => {
    fetch(`http://localhost:8000/api/reviews/restaurants/${currentRestaurant.id}`)
    .then(res => res.json())
    .then(data => {
      console.log("DATA:", data)
      setReviews(data.reviews)
      console.log(reviews, "REVIEWS")
      
    })
  }, [currentRestaurant])

    

    let length = reviews.length
    let total = 0
    reviews.forEach((review)=>{
        total += review.rating
    })
    let result = total / length


        return (
            <>
            <h1>{currentRestaurant.name}</h1>
            
    
            <h4> Rating {result} </h4>
            <h6>Price:{currentRestaurant.price}</h6>
            <img src={currentRestaurant.picture}  width="150"/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Days</th>
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
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>rating</th>
                        <th>title</th>
                        <th>content</th>
                        
                    </tr>
                </thead>
                {console.log(reviews, "YYYYY")}

                    
                <tbody>
                {reviews ? reviews.map(review => (
                    <tr key={review.id}>
                        <td>{review.rating }</td>
                        <td>{review.title}</td>
                        <td>{review.content}</td>
                        
                    </tr>
                )):null}
                </tbody>
            </table>
            </>
        )
            }


export default RestaurantDetail