import { SearchInputStyled } from "../styles/SearchInput.styled";

interface SearchInputProps {
  searchProduct: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ searchProduct }: SearchInputProps) => {
  return (
    <SearchInputStyled className="zelty-restaurant__search">
      <input type="search" onChange={searchProduct} placeholder="Search for a product..." />
    </SearchInputStyled>
  );
};
