import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notification from '../../features/Notification';
import CheckoutService from "../../services/checkout/Checkout.service";
import { CartProduct } from "../../shared/models/CartProduct.model";
import Store from "../../store/Index";
import { RootState } from "../../store/RootState.model";
import { CartStyled } from "../styles/Cart.styled";
import { Badge } from "./Badge";
import { Button } from "./Button";

const Cart = (props: {atCatalogue: boolean, atCheckout: boolean, checkoutConfirmed: boolean}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.products);
  const options = useSelector((state: RootState) => state.options);
  const cartProducts = useSelector((state: RootState) => state.cartProducts.sort((a: CartProduct, b: CartProduct) => a.productId.localeCompare(b.productId)));
  const clientInfors = useSelector((state: RootState) => state.client);

  const removeProduct = (commandId: string) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: commandId});
    Notification.notifyProduct({ type: "removeProduct", label: "" });
  }

  const calculateTotal = (products: CartProduct[]) => {
    const total = products.reduce((sum, i) => {
      return ((sum + i.price))
    }, 0)
    return (total*0.01).toFixed(2);
  }

  const navigateCheckout = () => {
    navigate("/checkout");
  }

  const payCommand = async () => {
    try {
      const data = await CheckoutService.payCommand(cartProducts, clientInfors);
      console.log(data);
      Notification.notifyPayment();
      emptyCart();
    } catch (error) {
      console.error(error);
    }
  }

  const emptyCart = () => {
    dispatch({ type: "REMOVE_ALL_PRODUCTS"});
  }

  return (
    <CartStyled className="zelty-restaurant__cart">
      <div className="zelty-restaurant__cart__head">
        <Badge active>
          Dine-in
        </Badge>
        <div className="zelty-restaurant__cart__head__table">
          <h3>Table</h3>
          <span>03</span>
        </div>
      </div>
      <div className="zelty-restaurant__cart__items">
        {cartProducts.length === 0 ?
          <div className="zelty-restaurant__cart__items__empty">
            No product yet 🥺
          </div>
        :
          cartProducts.map((product: CartProduct, index) => (
            <div key={product.commandId} className="zelty-restaurant__cart__items__product">
              <div className="zelty-restaurant__cart__items__product__details">
                <span className="zelty-restaurant__cart__items__product__details__name">
                  {products.find(item => item.id === product.productId) ? products.find(item => item.id === product.productId)?.name : <></>}
                  <span className="zelty-restaurant__cart__items__product__details__name__remove" onClick={() => removeProduct(product.commandId)}></span>
                </span>
                {product.options &&
                  <span className="zelty-restaurant__cart__items__product__details__option">
                    {options.find(item => item.id === product.options) ? options.find(item => item.id === product.options)?.name : <></>}
                  </span>
                }
              </div>
              <span className="zelty-restaurant__cart__items__product__price">
                {(product.price/100).toFixed(2)} €
              </span>
            </div>
          ))
        }
      </div>
      <div className="zelty-restaurant__cart__foot">
        <div className="zelty-restaurant__cart__foot__total">
          <span className="label">Total</span>
          <span className="price">{calculateTotal(cartProducts)} €</span>
        </div>
        {cartProducts.length > 0 ?
          (props.atCatalogue ?
            <Button onClick={navigateCheckout}>Order</Button>
          :
            (props.checkoutConfirmed === true ?
              <Button onClick={payCommand}>Pay</Button>
            :
              <Button disabled>Pay</Button>
            )
          )
        :
          <Button disabled>Order</Button>
        }
      </div>
    </CartStyled>
  );
};

export default React.memo(Cart);
