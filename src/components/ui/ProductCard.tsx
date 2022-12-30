import React from 'react';
import { ProductCardStyled } from '../styles/ProductCard.Styled';
import { Product } from "../../shared/models/Product.model";
import { Badge } from './Badge';

const ProductCard = (props: {product: Product}) => {

  return (
    <ProductCardStyled className="product-card">
      <header className="product-card__header">
        <img className="product-card__header__image" alt={ProductCard.name} src={props.product.image}/>
      </header>
      <div className="product-card__content">
        <h3 className="product-card__content__name">{props.product.name}</h3>
        <span className="product-card__content__description">{props.product.description}</span>
      </div>
      <div className="product-card__footer">
        {props.product.sold_out ?
        <Badge warning>
          Sold out
        </Badge>
        :
        <></>
        }
        <span className="product-card__footer__price">{props.product.price}€</span>
      </div>
    </ProductCardStyled>
  )
}

export default ProductCard