import React from 'react';


class RestaurantForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
    const data = { ...this.state };
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
    this.setState({ price: value })
  }
  handleNameChange(event) {
    const value = event.target.value;
    this.setState({ name: value })
  }
  handlePhoneChange(event) {
    const value = event.target.value;
    this.setState({ phone: value })
  }
  handleAddressChange(event) {
    const value = event.target.value;
    this.setState({ address: value })
  }
  handleCityChange(event) {
    const value = event.target.value;
    this.setState({ city: value })
  }
  handleZipCodeChange(event) {
    const value = event.target.value;
    this.setState({ zip_code: value })
  }
  handleCountryChange(event) {
    const value = event.target.value;
    this.setState({ country: value })
  }
  handleStateChange(event) {
    const value = event.target.value;
    this.setState({ state: value })
  }
  handleStartChange(event) {
    const value = event.target.value;
    this.setState({ start_: value })
  }
  handleEndChange(event) {
    const value = event.target.value;
    this.setState({ end_: value })
  }
  handleDayChange(event) {
    const value = event.target.value;
    this.setState({ day: value })
  }
  handlePictureChange(event) {
    const value = event.target.value;
    this.setState({ picture: value })
  }

  render() {
    return (
      <div className="offset-2 col-8">
        <form onSubmit={this.handleSubmit} id="create-restaurant-form" className="row g-3 shadow p-4">
          <h3 className="h3 text-center">Create a Restaurant</h3>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input onChange={this.handleNameChange} value={this.state.name} placeholder="" required type="text" name="name" id="name" className="form-control" />
          </div>
          <div className="col-md-2">
            <label htmlFor="price" className="form-label">Price</label>
            <input onChange={this.handlePriceChange} value={this.state.price} placeholder="$$$" required type="text" name="price" id="price" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input onChange={this.handlePhoneChange} value={this.state.phone} placeholder="" required type="text" name="phone" id="phone" className="form-control" />
          </div>
          <div className="col-md-12">
            <label htmlFor="address" className="form-label">Address</label>
            <input onChange={this.handleAddressChange} value={this.state.address} placeholder="1234 Main St" required type="text" name="address" id="address" className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">City</label>
            <input onChange={this.handleCityChange} value={this.state.city} placeholder="" required type="text" name="city" id="city" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">State</label>
            <input onChange={this.handleStateChange} value={this.state.state} placeholder="" required type="text" name="zip_code" id="zip_code" className="form-control" />
          </div>
          <div className="col-md-2">
            <label htmlFor="zip_code" className="form-label">Zip</label>
            <input onChange={this.handleZipCodeChange} value={this.state.zip_code} placeholder="" required type="number" name="zip_code" id="zip_code" className="form-control" />
          </div>
          <div className="col-md-12">
            <label htmlFor="country" className="form-label">Country</label>
            <input onChange={this.handleCountryChange} value={this.state.country} placeholder="" required type="text" name="country" id="country" className="form-control" />
          </div>
          <div className="col-md-12">
            <label htmlFor="picture" className="form-label">Picture URL</label>
            <input onChange={this.handlePictureChange} value={this.state.picture} placeholder=".png / .jpg" required type="text" name="picture" id="picture" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="day" className="form-label">Day</label>
            <input onChange={this.handleDayChange} value={this.state.day} placeholder="Monday" required type="text" name="day" id="day" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">Start</label>
            <input onChange={this.handleStartChange} value={this.state.start_} placeholder="9AM" required type="text" name="start_" id="start_" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="end_" className="form-label">End</label>
            <input onChange={this.handleEndChange} value={this.state.end_} placeholder="6PM" required type="text" name="end_" id="end_" className="form-control" />
          </div>
          <div className="col-12 mb-2">
            <button className="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;