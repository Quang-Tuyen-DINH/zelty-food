import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CheckoutInput } from "../components/forms/CheckoutInput";
import { CheckoutStyled } from "../components/styles/Checkout.styled";
import Cart from "../components/ui/Cart";
import { ClientCheckout } from "../shared/models/ClientCheckout.model";
import Store from "../store/Index";

export const Checkout = () => {
  const dispatch = useDispatch();
  const [confirmed, setConfirmed] = useState<boolean>(false);

  useEffect(() => {
  }, [])

  const confirmerInfors = (confirmation: ClientCheckout) => {
    if(confirmation === Store.getState().client) {
      setConfirmed(true)
    }
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
