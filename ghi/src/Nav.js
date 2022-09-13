import { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MainContext } from './MainContext';


function Nav() {
  const [search, setSearch] = useState("");
  const {matchingResults, setMatchingResults} = useContext(MainContext);
  const {dataArr} = useContext(MainContext);
  const [clicked, setClicked] = useState(false)
  
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
                <NavLink className="nav-link active" aria-current="page" to="/reviews/new">New Review</NavLink>
              </li>
              <li className="nav-item">
                <div className="input-group">
                  <input value={search} onChange={e => setSearch(e.target.value)} onKeyPress={handleEnter} type="search" className="form-control rounded" placeholder="Find sauce" aria-label="Search" aria-describedby="search-addon" />
                  <button onClick={handleClick} type="button" className="btn btn-outline-secondary">Search</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;
