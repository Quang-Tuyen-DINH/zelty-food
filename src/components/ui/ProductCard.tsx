import React, { useState } from 'react';
import uuid from 'react-uuid';
import { ProductCardStyled } from '../styles/ProductCard.Styled';
import { Product } from "../../shared/models/Product.model";
import { Badge } from './Badge';
import { useDispatch } from 'react-redux';
import { Button } from './Button';
import { Item } from '../../shared/models/Option.model';
import Notification from '../../features/Notification';

const ProductCard = (props: {product: Product, options?: Item[]}) => {
  const dispatch = useDispatch();
  const [chooseOption, setChooseOption] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const addToCartWithOptions = () => {
    setChooseOption(false);
    dispatch({ type: "ADD_PRODUCT", payload: {commandId: uuid(), productId: props.product.id, options: selectedOption, price: props.product.price} });
    Notification.notifyProduct("addProduct", props.product.name);
  }

  const addToCart = () => {
    dispatch({ type: "ADD_PRODUCT", payload: {commandId: uuid(), productId: props.product.id, price: props.product.price} });
    Notification.notifyProduct("addProduct", props.product.name);
  }

  return (
    <ProductCardStyled className="product-card">
      <header className="product-card__header">
        <img className="product-card__header__image" alt={ProductCard.name} src={props.product.image}/>
        <div className="product-card__header__button">
          {props.product.sold_out === true ?
          <Button disabled>En rupture</Button>
          :
          (props.product.available_options ?
            (chooseOption === false ?
              (props.product.available_options[0][0] === "S" ?
                <Button onClick={() => setChooseOption(true)}>Choisir la sauce</Button>
              :
                <Button onClick={() => setChooseOption(true)}>Choisir l'accompagnement</Button>
              )
            :
              <Button onClick={addToCartWithOptions}>Confirmer</Button>
            )
            :
            <Button onClick={addToCart}>Choisir</Button>
          )
          }
        </div>
      </header>
      <div className="product-card__content">
        <h3 className="product-card__content__name">{props.product.name}</h3>
        {chooseOption === false ?
          <span className="product-card__content__description">{props.product.description}</span>
        :
          <div className="product-card__content__options">
            <div onClick={() => setChooseOption(false)} className="product-card__content__options__back">
              <i className="product-card__content__options__back__arrow"></i><p>Retour</p>
            </div>
            {(props.product.available_options && props.options) &&
              props.product.available_options.map((option: string, index) => (
                <label key={`option-${index}`} className="product-card__content__options__radio">
                  <input name="radio" type="radio" value={option} onClick={() => setSelectedOption(option)}/>
                  <span className="product-card__content__options__radio__label">
                    {props.options && props.options.find(item => item.id === option) ?
                      props.options.find(item => item.id === option)?.name
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
        {props.product.sold_out ?
          <>
            <span className="product-card__footer__price-sold-out">{(props.product.price/100).toFixed(2)} €</span>
            <Badge warning>
              Sold out
            </Badge>
          </>
        :
          <span className="product-card__footer__price">{(props.product.price/100).toFixed(2)}€</span>
        }
      </div>
    </ProductCardStyled>
  )
}

export default ProductCard