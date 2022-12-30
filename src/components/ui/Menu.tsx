import { useState } from "react";
import { Badge } from "./Badge";
import { MenuStyled } from "../styles/Menu.syled";
import { Menu } from "../../shared/models/Menu.model";

export const MenuList = (props: {menu: Menu[], selectMenu: any}) => {
  const[selectedMenu, setSelectedMenu] = useState("M01");

  const selectMenu = (event: any) => {
    props.selectMenu(event.target.id);
    setSelectedMenu(event.target.id);
  }

  return (
    <MenuStyled className="zelty-restaurant__menu">
      {props.menu.map((menu: Menu) => (
        (selectedMenu === menu.id ? 
        <Badge active dark key={menu.id} id={menu.id} onClick={selectMenu}>{menu.name}</Badge>
        :
        <Badge dark key={menu.id} id={menu.id} onClick={selectMenu}>{menu.name}</Badge>)
      ))}
    </MenuStyled>
  );
};
