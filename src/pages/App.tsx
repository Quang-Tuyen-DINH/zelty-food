import React from "react";
import { ToastContainer } from "react-toastify";
import logo from "../assets/logo.svg";
import { AppStyled } from "../components/styles/App.styled";
import AppRoutes from "../routes/routes";

function App() {

  return (
    <AppStyled className="zelty-restaurant">
      <AppRoutes />
      <ToastContainer />
    </AppStyled>
  );
}

export default App;
