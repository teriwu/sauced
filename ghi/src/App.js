import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import RestaurantList from './RestaurantLists';
import UserForm from './UserForm';

import RestaurantForm from './RestaurantForm';
import ReviewForm from './ReviewForm';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/users" element={<UserForm />} />
          <Route path="/restaurants/new" element={<RestaurantForm />} />
          <Route path="/reviews/new" element={<ReviewForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
