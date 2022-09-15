import { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MainContext } from './MainContext';


function Nav() {
  const [search, setSearch] = useState("");
  const {matchingResults, setMatchingResults} = useContext(MainContext);
  const {dataArr} = useContext(MainContext);
  
  const navigate = useNavigate();

  const handleClick = () => {
    setMatchingResults(matchingResults => ([]));
    console.log("MATCHING RESULTS:", matchingResults);
    for(let i = 0; i < dataArr.length; i++) {
      if (dataArr[i].name.toLowerCase() === search.toLowerCase()) {
        setMatchingResults(matchingResults => [...matchingResults, dataArr[i]])
      }
    }
    navigate("/restaurants");
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setMatchingResults(matchingResults => ([]));
      for(let i = 0; i < dataArr.length; i++) {
        if (dataArr[i].name.toLowerCase() === search.toLowerCase()) {
          setMatchingResults(matchingResults => [...matchingResults, dataArr[i]])
        }
      }
      navigate("/restaurants");
    }
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <NavLink to="/">
              <img src="../sauce_nav.png" alt="Home" width="50" />
            </NavLink>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/restaurants" className="nav-link" aria-current="page">Restaurants</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="restaurants/new">New Restaurant</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/reviews/new">New Review</NavLink>
              </li>
            </ul>
          </div>
          
          {/* Right elements */}
          <div className="d-flex">
            {/* <ul className="navbar-nav ms-auto"> */}
              {/* <li className="nav-item"> */}
                <div className="input-group">
                  <input value={search} onChange={e => setSearch(e.target.value)} onKeyPress={handleEnter} type="search" className="form-control rounded" placeholder="Find sauce" aria-label="Search" aria-describedby="search-addon" />
                  <button onClick={handleClick} type="button" className="btn btn-outline-light"><i class="bi bi-search"></i></button>
                </div>
              {/* </li> */}
              {/* <li className="nav-item"> */}
                <NavLink className="nav-link" aria-current="page" to="/users/new">Create Account</NavLink>
              {/* </li> */}
              {/* <li className="nav-item"> */}
                <NavLink className="nav-link" aria-current="page" to="/api/users/login">Log In</NavLink>
              {/* </li> */}
            {/* </ul> */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;
