import React from 'react';
import logo from "../../assets/logo.svg"
import { NavBarStyled } from "../styles/NavBar.styled";
import { Link } from "react-router-dom";

const headersData = [
  {
    label: "Catalogue",
    id: "catalogue"
  },
  {
    label: "Checkout",
    id: "checkout"
  }]; 

const NavBar = () => {
  return (
    <NavBarStyled>
      <ul className="zelty-restaurant__nav-bar">
        <li className="zelty-restaurant__nav-bar__logo">
          <img src={logo} alt="logo" />
        </li>
        {headersData.map(item => {
          return (
            <li key={item.id} className="zelty-restaurant__nav-bar__element">
              <Link to={item.id}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </NavBarStyled>
  )
}

export default NavBar;