import styled from "styled-components";

export const ProductCardStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  background: white;
  border-radius: 30px;
  box-sizing: border-box;
  box-shadow: 0 0 15px 9px rgba(0,0,0,0.03);
  cursor: pointer;
  .product-card {
    &__header {
      overflow: hidden;
      width: 320px;
      height: 200px;
      &__image {
        width: 320px;
        border-radius: 30px 30px 0 0;
      }
    }
    &__content {
      padding: 1rem 0.8rem;
      height: 145px;
      &__name {
        font-size: 24px;
        text-transform: capitalize;
        margin: 0 0 15px 0;
      }
      &__description{
        font-size: 16px;
        color: #8b8a8b;
      }
    }
    &__footer {
      padding: 0 0.8rem 1rem 0.8rem;
      width: 100%;
      display: flex;
      justify-content: right;
      &__price {
        margin: 0 0 0 15px;
        font-size: 1.2rem;
      }
    }
  }
`;