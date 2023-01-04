import React, { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState<string>("")

  return (
    <NavBarStyled>
      <ul className="zelty-restaurant__nav-bar">
        <li className="zelty-restaurant__nav-bar__logo">
          <Link to="landing">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        {headersData.map(item => (
          <li key={item.id} className={activeTab === item.id ? "zelty-restaurant__nav-bar__element-active": "zelty-restaurant__nav-bar__element"} onClick={() => setActiveTab(item.id)} >
            <Link to={item.id}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </NavBarStyled>
  )
}

export default NavBar;