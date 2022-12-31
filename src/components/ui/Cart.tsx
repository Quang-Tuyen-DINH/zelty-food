import { useEffect, useState } from "react";
import { CartProduct } from "../../shared/models/CartProduct.model";
import { Item } from "../../shared/models/Option.model";
import { Product } from "../../shared/models/Product.model";
import Store from "../../store/Index";
import { CartStyled } from "../styles/Cart.styled";
import { Badge } from "./Badge";
import { Button } from "./Button";

export const Cart = (props: {products: Product[], options: Item[]}) => {
  const [products, setProducts] = useState<Product[]>(props.products);
  const [options, setOptions] = useState<Item[]>(props.options);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    Store.subscribe(() => {
      setCartProducts(Store.getState().cartProducts);
    });
  }, [cartProducts])

  const test = () => {
    console.log(cartProducts)
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
        <button onClick={test}>TEST</button>
        {cartProducts.length === 0 ?
        <div className="zelty-restaurant__cart__items__empty">
          Aucun produit dans le panier 🥺
        </div>
        :
        <div className="zelty-restaurant__cart__items__item">
          <span className="zelty-restaurant__cart__items__item__name"></span>
          <span className="zelty-restaurant__cart__items__item__quantity"></span>
        </div>
        }
      </div>
      <div className="zelty-restaurant__cart__foot">
        <div className="zelty-restaurant__cart__foot__total">
          <span className="label">Total</span>
          <span className="price">0 €</span>
        </div>
        <Button disabled>Commander</Button>
      </div>
    </CartStyled>
  );
};
