import { useState } from "react";
import { Badge } from "./Badge";
import { MenuStyled } from "../styles/Menu.syled";
import { Menu } from "../../shared/models/Menu.model";

interface MenuListProps {
  menu: Menu[];
  selectMenu: (menuId: string) => void;
}

export const MenuList = ({ menu, selectMenu }: MenuListProps) => {
  const[selectedMenu, setSelectedMenu] = useState<string>("M01");

  const handleSelectMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    selectMenu(event.currentTarget.id);
    setSelectedMenu(event.currentTarget.id);
  }

  return (
    <MenuStyled className="zelty-restaurant__menu">
      {menu.sort((a, b) => a.id.localeCompare(b.id)).map((menu: Menu) => (
        (selectedMenu === menu.id ? 
        <Badge active dark key={menu.id} id={menu.id} onClick={handleSelectMenu}>{menu.name}</Badge>
        :
        <Badge dark key={menu.id} id={menu.id} onClick={handleSelectMenu}>{menu.name}</Badge>)
      ))}
    </MenuStyled>
  );
};
