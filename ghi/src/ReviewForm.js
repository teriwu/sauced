import React from 'react'
class ReviewForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            restaurant_id: '',
            restaurant_ids: [],
            restaurants: [],
            title: '',
            content: '',
            rating: '',
        }
        this.handleRestaurantIdChange = this.handleRestaurantIdChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleContentChange = this.handleContentChange.bind(this)
        this.handleRatingChange = this.handleRatingChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.restaurants
        delete data.restaurant_ids
        console.log(data, "DATA")
        // const reviewUrl = 'http://localhost:8000/api/reviews/';
        const reviewUrl = `${process.env.REACT_APP_FASTAPI_SERVICE}/api/reviews`;
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
        },
    };
        const response = await fetch(reviewUrl, fetchConfig);
        if (response.ok){
            const newReview = await response.json();
            console.log(newReview);
            const cleared = {
                restaurant_id: '',
                title: '',
                content: '',
                rating: '',
            };
            this.setState(cleared);
        }
    }
    handleRestaurantIdChange(event) {
      const value = event.target.value;
      this.setState({restaurant_id: value})
    }

    handleTitleChange(event) {
        const value = event.target.value;
        this.setState({title: value})
    }
    handleContentChange(event) {
        const value = event.target.value;
        this.setState({content: value})
    }
    handleRatingChange(event) {
        const value = event.target.value;
        this.setState({rating: value})
    }

    async componentDidMount(){
      const restaurantUrl = `${process.env.REACT_APP_FASTAPI_SERVICE}/api/restaurants`;
      const response = await fetch(restaurantUrl)

      if(response.ok) {
        const data_restaurant = await response.json();
        console.log(data_restaurant, "ggggg")
        this.setState({restaurants: data_restaurant.restaurants})
      }
    }
   
   
        
        
    
    render() {
      return (
        <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4">
                <h3 className="h3 text-center">Create a Review</h3>
                <form onSubmit={this.handleSubmit} id="create-review-form">
                  <div className="mb-3">
                    <select onChange={this.handleRestaurantIdChange} value={this.state.restaurant_id} required name="restaurant_id" id="restaurant_id" className="form-select">
                    <option value="">Choose a restaurant</option>
                    {this.state.restaurants.map(restaurant => {
                      return (
                        <option key={restaurant.id} value={restaurant.id}>
                        {restaurant.name} / {restaurant.address}, {restaurant.city}, {restaurant.state}, {restaurant.zip_code}
                        </option>
                      )
                    })}
                    </select>
                  </div>
                  
                  <div className= "mb-3">
                    <input onChange={this.handleTitleChange} value={this.state.title} placeholder="Title" required type="text" name="title" id="title" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <textarea rows= "5" onChange={this.handleContentChange} value={this.state.content} placeholder="Leave a Review" required type="text" name="content" id="content" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <input onChange={this.handleRatingChange} value={this.state.rating} placeholder="Rating" required type="number" min="1" max="5" name="rating" id="rating" className="form-control" />
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        );
      }
    }
    
    export default ReviewForm;