import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';
import App from '../pages/App';
import { Catalogue } from "../pages/Catalogue";
import { Checkout } from "../pages/Checkout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes