import React from "react";
import { Link } from 'react-router-dom';

class RestaurantList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: []
        }
    }

    async componentDidMount() {
        const response = await fetch('http://127.0.0.1:8000/api/restaurants')
        if (response.ok) {
            const data = await response.json()
            this.setState({
                restaurants: data.restaurants
            })
        }
    }

    render () {
        return (
            <>
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
                                <td><img src="https://via.placeholder.com/150" alt="restaurant img"></img>{restaurant.picture}</td>
                                <td>{ restaurant.name }</td>
                                <td>{ restaurant.city }</td>
                                <td>{ restaurant.price }</td>
                                <td>{ restaurant.rating }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </>
        )
    }
}

export default RestaurantList