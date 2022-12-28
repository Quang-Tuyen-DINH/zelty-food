import { CheckoutInputStyled } from "../styles/CheckoutInput.Styled";

export const CheckoutInput = () => {
  return (
    <CheckoutInputStyled className="zelty-restaurant__search">
      <input type="search" placeholder="Rechercher un produit..." />
    </CheckoutInputStyled>
  );
};
