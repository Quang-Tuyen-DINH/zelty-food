import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../components/ui/Cart';
import NavBar from '../components/ui/NavBar';
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