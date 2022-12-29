import { Menu } from "../components/ui/Menu";
import { SearchInput } from "../components/forms/SearchInput";
import { CatalogueStyled } from "../components/styles/Catalogue.styled";
import { Cart } from "../components/ui/Cart";

export const Catalogue = () => {
  return (
    <CatalogueStyled className="zelty-restaurant__catalogue">
      <div className="zelty-restaurant__catalogue__content">
        <div className="zelty-restaurant__catalogue__content__left">
          <SearchInput />
          <Menu />
          <div className="zelty-restaurant__products">
            Liste des produits ici
          </div>
        </div>
        <div className="zelty-restaurant__catalogue__content__right">
          <Cart />
        </div>
      </div>
    </CatalogueStyled>
  );
};
