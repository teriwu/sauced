import React from 'react'
class ReviewForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            rating: '',
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleContentChange = this.handleContentChange.bind(this)
        this.handleRatingChange = this.handleRatingChange.bind(this)
        this.handleSubmit = this.handleSubmitChange.bind(this)

    }

    async handleSubmitChange(event) {
        event.preventDefault();
        const data = {...this.state};
        const reviewUrl = 'http://localhost:8000/api/reviews/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json', 
        },
    };
        const response = await fetch(reviewUrl, fetchConfig);
        if (response.ok){
            const newReview = await response.json();
            const cleared = {
                title: '',
                content: '',
                rating: '',
            };
            this.setState(cleared);
        }
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
            
        
        
        
        

    render() {
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a Review</h1>
                <form onSubmit={this.handleSubmit} id="create-review-form">
                  <div className= "mb-3">
                    <input onChange={this.handleTitleChange} value={this.state.price} placeholder="Title" required type="text" name="title" id="title" className="form-control" />
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