import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MainContext } from './MainContext';
import MainPage from './MainPage';
import Nav from './Nav';
import RestaurantForm from './RestaurantForm';
import RestaurantList from './RestaurantLists';
import ReviewForm from './ReviewForm';
import RestaurantDetail from './RestaurantDetail';


function App() {

  const [matchingResults, setMatchingResults] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [currentRestaurant, setRestaurant] = useState({});
  

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/restaurants")
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
      currentRestaurant, setRestaurant
    }}>
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />   
          <Route path="/restaurants/new" element={<RestaurantForm />} />
          <Route path="/restaurants" element={<RestaurantList setRestaurant={setRestaurant} />} />
          <Route path="/reviews/new" element={<ReviewForm />} />
          <Route path="/restaurants/detail" element={<RestaurantDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
