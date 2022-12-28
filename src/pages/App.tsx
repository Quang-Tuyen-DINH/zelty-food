import React from "react";
import logo from "../assets/logo.svg";
import { AppStyled } from "../components/styles/App.styled";
import { Catalogue } from "../components/ui/Catalogue";
import { Cart } from "../components/ui/Cart";

function App() {

  return (
    <AppStyled className="zelty-restaurant">
      <header>
        <img className="zelty-restaurant__logo" src={logo} alt="logo" />
      </header>
      <div className="zelty-restaurant__content">
        <div className="zelty-restaurant__content__left">
          <Catalogue />
        </div>
        <div className="zelty-restaurant__content__right">
          <Cart />
        </div>
      </div>
    </AppStyled>
  );
}

export default App;
