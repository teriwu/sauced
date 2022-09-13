import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MainContext } from './MainContext';
import MainPage from './MainPage';
import Nav from './Nav';
import RestaurantList from './RestaurantLists';
import UserForm from './UserForm';
import LogIn from './LogIn';

import RestaurantForm from './RestaurantForm';
import ReviewForm from './ReviewForm';

function App() {

  const [matchingResults, setMatchingResults] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  
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
      dataArr, setDataArr
    }}>
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/users/new" element={<UserForm />} />
          <Route path="/restaurants/new" element={<RestaurantForm />} />
          <Route path="/reviews/new" element={<ReviewForm />} />
          <Route path="/api/users/login" element={<LogIn />} />
        </Routes>
      </div>
    </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
