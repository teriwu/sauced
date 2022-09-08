import React from 'react';
import { NavLink } from 'react-router-dom';


/* Taken from conference-go */
class Nav extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: "",
    }

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);

  }

  handleChangeSearch(e) {
    const value = e.target.value;
    this.setState({search: value})
  }

  // async handleSearch() {
  //   const search = this.state.search;

  // }

  render () {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Sauce</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="restaurants/new">New Restaurant</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/restaurants">Restaurants</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/users/new">Account</NavLink>
                </li>
                <li className="nav-item">
                  <div className="input-group">

                    <input onChange={this.handleChangeSearch} type="search" className="form-control rounded" placeholder="Find sauce" aria-label="Search" aria-describedby="search-addon" />

                    <button type="button" className="btn btn-outline-secondary">Search</button>

                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Nav;
