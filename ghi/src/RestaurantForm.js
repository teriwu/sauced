import React from 'react';

class RestaurantForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            price: '',
            name: '',
            phone:'',
            address: '',
            city: '',
            zip_code: '',
            country: '',
            state: '',
            start_: '',
            end_: '',
            day: '',
            picture: '',
        }
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handleCityChange = this.handleCityChange.bind(this)
        this.handleZipCodeChange = this.handleZipCodeChange.bind(this)
        this.handleCountryChange = this.handleCountryChange.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.handleStartChange = this.handleStartChange.bind(this)
        this.handleEndChange = this.handleEndChange.bind(this)
        this.handleDayChange = this.handleDayChange.bind(this)
        this.handlePictureChange = this.handlePictureChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }




    async handleSubmit(event) {
        event.preventDefault();
        const data= {...this.state};
        const restaurantUrl = `${process.env.REACT_APP_FASTAPI_SERVICE}/api/restaurants`;
        console.log(data, "adfasdfasd")
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },

        };
        
        const response = await fetch(restaurantUrl, fetchConfig);
        if (response.ok) {
            const newRestaurant = await response.json();
            console.log(newRestaurant)
            const cleared = {
                price: '',
                name: '',
                phone: '',
                address: '',
                city: '',
                zip_code: '',
                country: '',
                state: '',
                start_: '',
                end_: '',
                day: '',
                picture: '',
                
            };
            this.setState(cleared);
        }
    }

    handlePriceChange(event) {
        const value = event.target.value;
        this.setState({price: value})
    }
    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }
    handlePhoneChange(event) {
        const value = event.target.value;
        this.setState({phone: value})
    }
    handleAddressChange(event) {
        const value = event.target.value;
        this.setState({address: value})
    }
    handleCityChange(event) {
        const value = event.target.value;
        this.setState({city: value})
    }
    handleZipCodeChange(event) {
        const value = event.target.value;
        this.setState({zip_code: value})
    }
    handleCountryChange(event) {
        const value = event.target.value;
        this.setState({country: value})
    }
    handleStateChange(event) {
        const value = event.target.value;
        this.setState({state: value})
    }
    handleStartChange(event) {
        const value = event.target.value;
        this.setState({start_: value})
    }
    handleEndChange(event) {
        const value = event.target.value;
        this.setState({end_: value})
    }
    handleDayChange(event) {
        const value = event.target.value;
        this.setState({day: value})
    }
    handlePictureChange(event) {
        const value = event.target.value;
        this.setState({picture: value})
    }



    render() {
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4">
                <h1>Create a Restaurant</h1>
                <form onSubmit={this.handleSubmit} id="create-restaurant-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handlePriceChange} value={this.state.price} placeholder="Price" required type="text" name="price" id="price" className="form-control" />
                    <label htmlFor="price">Price</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handlePhoneChange} value={this.state.phone} placeholder="Phone" required type="text" name="phone" id="phone" className="form-control" />
                    <label htmlFor="phone">Phone</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleAddressChange} value={this.state.address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                    <label htmlFor="address">Address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleCityChange} value={this.state.city} placeholder="City" required type="text" name="city" id="city" className="form-control" />
                    <label htmlFor="city">City</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleZipCodeChange} value={this.state.zip_code} placeholder="Zip Code" required type="number" name="zip_code" id="zip_code" className="form-control" />
                    <label htmlFor="zip_code">Zip Code</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleCountryChange} value={this.state.country} placeholder="Country" required type="text" name="country" id="country" className="form-control" />
                    <label htmlFor="country">Country</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleStateChange} value={this.state.state} placeholder="State" required type="text" name="zip_code" id="zip_code" className="form-control" />
                    <label htmlFor="state">State</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handlePictureChange} value={this.state.picture} placeholder="Picture" required type="text" name="picture" id="picture" className="form-control" />
                    <label htmlFor="picture">Picture</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleDayChange} value={this.state.day} placeholder="Day" required type="text" name="day" id="day" className="form-control" />
                    <label htmlFor="day">Day</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleStartChange} value={this.state.start_} placeholder="Start" required type="text" name="start_" id="start_" className="form-control" />
                    <label htmlFor="state">Start</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleEndChange} value={this.state.end_} placeholder="End" required type="text" name="end_" id="end_" className="form-control" />
                    <label htmlFor="end_">End</label>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        );
      }
    }
    
    export default RestaurantForm;