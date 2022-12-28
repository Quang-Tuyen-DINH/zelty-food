import { Menu } from "./Menu";
import { SearchInput } from "../forms/SearchInput";
import { CatalogueStyled } from "../styles/Catalogue.styled";

export const Catalogue = () => {
  return (
    <CatalogueStyled className="zelty-restaurant__catalogue">
      <SearchInput />
      <Menu />
      <div className="zelty-restaurant__products">
        Liste des produits ici
      </div>
    </CatalogueStyled>
  );
};
