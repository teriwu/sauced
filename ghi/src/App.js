import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import RestaurantForm from './RestaurantForm';
import RestaurantList from './RestaurantList';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/restaurants/new" element={<RestaurantForm />} />
          <Route path="/restaurants" element={<RestaurantList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
