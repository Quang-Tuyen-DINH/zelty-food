import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CartProduct } from "../../shared/models/CartProduct.model";
import { Item } from "../../shared/models/Option.model";
import { Product } from "../../shared/models/Product.model";
import Store from "../../store/Index";
import { CartStyled } from "../styles/Cart.styled";
import { Badge } from "./Badge";
import { Button } from "./Button";

export const Cart = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [options, setOptions] = useState<Item[]>([]);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    Store.subscribe(() => {
      setProducts(Store.getState().products);
      setOptions(Store.getState().options);
      setCartProducts(Store.getState().cartProducts);
    });
  }, [cartProducts])

  const removeProduct = (commandId: string) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: commandId});
  }

  const calculateTotal = (products: CartProduct[]) => {
    return products.reduce((sum, i) => {
      return (sum + i.price)
    }, 0)
  }

  return (
    <CartStyled className="zelty-restaurant__cart">
      <div className="zelty-restaurant__cart__head">
        <Badge active>
          Sur place
        </Badge>
        <div className="zelty-restaurant__cart__head__table">
          <h3>Table</h3>
          <span>03</span>
        </div>
      </div>
      <div className="zelty-restaurant__cart__items">
        {cartProducts.length === 0 ?
          <div className="zelty-restaurant__cart__items__empty">
            Aucun produit dans le panier 🥺
          </div>
        :
          cartProducts.map((product: CartProduct, index) => (
            <div key={product.commandId} className="zelty-restaurant__cart__items__product">
              <div className="zelty-restaurant__cart__items__product__details">
                <span className="zelty-restaurant__cart__items__product__details__name">
                  {products.find(item => item.id === product.productId) ? products.find(item => item.id === product.productId)?.name : <></>}
                  <span onClick={() => removeProduct(product.commandId)}></span>
                </span>
                {product.options &&
                  <span className="zelty-restaurant__cart__items__product__details__option">
                    {options.find(item => item.id === product.options) ? options.find(item => item.id === product.options)?.name : <></>}
                  </span>
                }
              </div>
              <span className="zelty-restaurant__cart__items__product__price">
                {product.price}
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
          <Button>Commander</Button>
        :
          <Button disabled>Commander</Button>
        }
      </div>
    </CartStyled>
  );
};
