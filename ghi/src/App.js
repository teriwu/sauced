import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MainContext } from './MainContext';
import MainPage from './MainPage';
import Nav from './Nav';

import RestaurantForm from './RestaurantForm';
import RestaurantList from './RestaurantLists';
import ReviewForm from './ReviewForm';
import Map from './map';
import Footer from './Footer';
import UserForm from './UserForm';
import LogIn from './LogIn';
import RestaurantDetail from './RestaurantDetail';
import About from './About';


function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');

  const [matchingResults, setMatchingResults] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [currentRestaurant, setRestaurant] = useState({});
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_FASTAPI_SERVICE}/api/restaurants`)
    .then(res => res.json())
    .then(data => {
      console.log("DATA:", data)
      setDataArr(data.restaurants);
    })
  }, [])

  return (
    <MainContext.Provider value ={{
      matchingResults, setMatchingResults,
      dataArr, setDataArr,
      currentRestaurant, setRestaurant,
    }}>
    <BrowserRouter basename={basename}>
      <div id="outer-div" className="d-flex flex-column vh-100 vw-96">
        <Nav />
        <div className="container pb-5">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/restaurants" element={<RestaurantList />} />
            <Route path="/restaurants/detail" element={<RestaurantDetail />} />
            <Route path="/restaurants" element={<RestaurantList  />} />
            <Route path="/restaurants/new" element={<RestaurantForm />} />
            <Route path="/reviews/new" element={<ReviewForm />} />
            <Route path="/users/new" element={<UserForm />} />
            <Route path="/api/users/login" element={<LogIn />} />
            <Route path="/map" element={<Map />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
