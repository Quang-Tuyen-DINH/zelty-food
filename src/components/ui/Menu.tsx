import { Badge } from "./Badge";
import { MenuStyled } from "../styles/Menu.syled";
import { Menu } from "../../shared/models/Menu.model";

export const MenuList = (props: {menu: Menu[], selectMenu: any}) => {
  const selectMenu = (event: any) => {
    props.selectMenu(event.target.id)
  }

  return (
    <MenuStyled className="zelty-restaurant__menu">
      {props.menu.map((menu: Menu) => (
        <Badge key={menu.id} id={menu.id} dark onClick={selectMenu}>{menu.name}</Badge>
      ))}
    </MenuStyled>
  );
};
