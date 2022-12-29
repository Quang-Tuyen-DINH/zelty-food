import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Catalogue } from "../pages/Catalogue";
import { Checkout } from "../pages/Checkout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes