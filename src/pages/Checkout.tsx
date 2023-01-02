import { useState } from "react";
import { CheckoutInput } from "../components/forms/CheckoutInput";
import { CheckoutStyled } from "../components/styles/Checkout.styled";
import Cart from "../components/ui/Cart";

export const Checkout = () => {
  const [confirmed, setConfirmed] = useState<boolean>(false);

  const confirmerInfors = (confirmation: boolean) => {
    setConfirmed(confirmation);
  }

  return (
    <CheckoutStyled className="zelty-restaurant__checkout">
      <div className="zelty-restaurant__checkout__left">
        <CheckoutInput confirmInfors={confirmerInfors} />
      </div>
      <div className="zelty-restaurant__checkout__right">
        <Cart atCatalogue={false} atCheckout={true} checkoutConfirmed={confirmed}/>
      </div>
    </CheckoutStyled>
  );
};
