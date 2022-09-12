import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import RestaurantList from './RestaurantLists';
import RestaurantForm from './RestaurantForm';
import ReviewForm from './ReviewForm';
import Map from './map';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/restaurants/new" element={<RestaurantForm />} />
          <Route path="/reviews/new" element={<ReviewForm />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
