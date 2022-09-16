import React, {useContext, useEffect, useState} from "react";
import { MainContext } from "./MainContext"; 


function RestaurantDetail(){    

    const {dataArr, currentRestaurant} = useContext(MainContext);
    console.log(currentRestaurant, "asdfasdf")
    console.log(dataArr)
    
    const [reviews, setReviews] = useState([]);
   

    useEffect((reviews) => {
    fetch(`${process.env.REACT_APP_FASTAPI_SERVICE}/api/reviews/restaurants/${currentRestaurant.id}`)
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
        <div className="row mb-4">
            <div className="align-self-center col-md-2">
                <img src={currentRestaurant.picture} alt="restaurant" width="150" className="rounded" />
            </div>
            <div className="col-md-10">
                <h3 className="h3">{currentRestaurant.name}</h3>
                <h4 className="h4 text-secondary"> Rating {result} </h4>
                <h6 className="h6 text-secondary">Price: {currentRestaurant.price}</h6>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <div className="col-md-12">
                    <table className="table table-striped border border-secondary">
                        <thead>
                            <tr>
                                <th>Days</th>
                                <th>Open</th>
                                <th>Close</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr key={currentRestaurant.id} className="align-middle">
                                <td>{currentRestaurant.day}</td>
                                <td>{currentRestaurant.start_}</td>
                                <td>{currentRestaurant.end_}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>                    
        
            <div className="col-md-6">
                <div className="col-md-12">
                    <table className="table table-striped border border-secondary">
                        <thead>
                            <tr>
                                <th>Rating</th>
                                <th>Title</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        {console.log(reviews, "YYYYY")}

                        <tbody>
                            {reviews ? reviews.map(review => (
                                <tr key={review.id} className="align-middle">
                                    <td className="text-center">{review.rating}</td>
                                    <td>{review.title}</td>
                                    <td>{review.content}</td>
                                </tr>
                            )) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
        </>
    )
}


export default RestaurantDetail