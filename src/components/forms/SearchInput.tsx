import { SearchInputStyled } from "../styles/SearchInput.styled";

export const SearchInput = (props: {searchProduct: any}) => {

  return (
    <SearchInputStyled className="zelty-restaurant__search">
      <input type="search" onClick={props.searchProduct} onChange={props.searchProduct} placeholder="Rechercher un produit..." />
    </SearchInputStyled>
  );
};
