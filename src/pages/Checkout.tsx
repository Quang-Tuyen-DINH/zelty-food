import { CheckoutInput } from "../components/forms/CheckoutInput";
import { CheckoutStyled } from "../components/styles/Checkout.styled";

export const Checkout = () => {
  return (
    <CheckoutStyled className="zelty-restaurant__checkout">
      <div className="zelty-restaurant__products">
        <CheckoutInput />
        CHECKOUT
      </div>
    </CheckoutStyled>
  );
};
