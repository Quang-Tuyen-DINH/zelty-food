import React from "react";
import logo from "../assets/logo.svg";
import { AppStyled } from "../components/styles/App.styled";
import AppRoutes from "../routes/routes";

function App() {

  return (
    <AppStyled className="zelty-restaurant">
      <header>
        <img className="zelty-restaurant__logo" src={logo} alt="logo" />
      </header>
      <AppRoutes />
    </AppStyled>
  );
}

export default App;
