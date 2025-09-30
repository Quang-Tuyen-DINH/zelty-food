import React, { useState } from 'react';
import uuid from 'react-uuid';
import { ProductCardStyled } from '../styles/ProductCard.Styled';
import { Product } from "../../shared/models/Product.model";
import { Badge } from './Badge';
import { useDispatch } from 'react-redux';
import { Button } from './Button';
import { Item } from '../../shared/models/Option.model';
import Notification from '../../features/Notification';

interface ProductCardProps {
  product: Product;
  options?: Item[];
}

const ProductCard = ({ product, options }: ProductCardProps) => {
  const dispatch = useDispatch();
  const [chooseOption, setChooseOption] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const addToCartWithOptions = () => {
    setChooseOption(false);
    dispatch({ type: "ADD_PRODUCT", payload: {commandId: uuid(), productId: product.id, options: selectedOption, price: product.price} });
    Notification.notifyProduct("addProduct", product.name);
  }

  const addToCart = () => {
    dispatch({ type: "ADD_PRODUCT", payload: {commandId: uuid(), productId: product.id, price: product.price} });
    Notification.notifyProduct("addProduct", product.name);
  }

  return (
    <ProductCardStyled className="product-card">
      <header className="product-card__header">
        <img className="product-card__header__image" alt={ProductCard.name} src={product.image}/>
        <div className="product-card__header__button">
          {product.sold_out === true ?
          <Button disabled>Sold out</Button>
          :
          (product.available_options ?
            (chooseOption === false ?
              (product.available_options[0][0] === "S" ?
                <Button onClick={() => setChooseOption(true)}>Choose the sauce</Button>
              :
                <Button onClick={() => setChooseOption(true)}>Choose side dish</Button>
              )
            :
              <Button onClick={addToCartWithOptions}>Confirm</Button>
            )
            :
            <Button onClick={addToCart}>Choose</Button>
          )
          }
        </div>
      </header>
      <div className="product-card__content">
        <h3 className="product-card__content__name">{product.name}</h3>
        {chooseOption === false ?
          <span className="product-card__content__description">{product.description}</span>
        :
          <div className="product-card__content__options">
            <div onClick={() => setChooseOption(false)} className="product-card__content__options__back">
              <i className="product-card__content__options__back__arrow"></i><p>Return</p>
            </div>
            {(product.available_options && options) &&
              product.available_options.map((option: string, index) => (
                <label key={`option-${index}`} className="product-card__content__options__radio">
                  <input name="radio" type="radio" value={option} onClick={() => setSelectedOption(option)}/>
                  <span className="product-card__content__options__radio__label">
                    {options && options.find(item => item.id === option) ?
                      options.find(item => item.id === option)?.name
                    :
                      <></>}
                    </span>
                </label>
              ))
            }
          </div>
        }
      </div>
      <div className="product-card__footer">
        {product.sold_out ?
          <>
            <span className="product-card__footer__price-sold-out">{(product.price/100).toFixed(2)} €</span>
            <Badge warning>
              Sold out
            </Badge>
          </>
        :
          <span className="product-card__footer__price">{(product.price/100).toFixed(2)}€</span>
        }
      </div>
    </ProductCardStyled>
  )
}

export default React.memo(ProductCard);