import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';
import Catalogue from "../pages/Catalogue";
import Checkout from "../pages/Checkout";
import Landing from '../pages/Landing';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes