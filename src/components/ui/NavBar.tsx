import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo.svg"
import { NavBarStyled } from "../styles/NavBar.styled";
import { Link, useLocation } from "react-router-dom";

const headersData = [
  {
    label: "Landing",
    id: "landing",
    link: ""
  },
  {
    label: "Catalogue",
    id: "catalogue",
    link: "catalogue"
  },
  {
    label: "Checkout",
    id: "checkout",
    link: "checkout"
  }]; 

const NavBar = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    setActiveTab(pathName);
  })

  const pathName = (): string => {
    return location.pathname;
  }

  return (
    <NavBarStyled>
      <ul className="zelty-restaurant__nav-bar">
        <li className="zelty-restaurant__nav-bar__logo">
          <Link to="">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        {headersData.map(item => (
          <li key={item.id} className={activeTab === `/${item.link}` ? "zelty-restaurant__nav-bar__element-active": "zelty-restaurant__nav-bar__element"} onClick={() => setActiveTab(`/${item.link}`)} >
            <Link to={item.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </NavBarStyled>
  )
}

export default NavBar;