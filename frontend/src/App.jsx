import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './Pages/Home/Home';
import Success from './Pages/Success/Success';
import NotFound from './Pages/NotFound/NotFound';
import MyReservations from './Pages/MyReservations/MyReservations';
import MenuPage from './Pages/menupage/MenuPage'; 
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<Success />} />
          <Route path='/my-reservations' element={<MyReservations />} />
          <Route path='/our-menu' element={<MenuPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Toaster position="top-center" />
      </Router>
    </>
  );
};

export default App;
