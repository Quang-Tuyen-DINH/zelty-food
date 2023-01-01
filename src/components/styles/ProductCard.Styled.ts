import styled from "styled-components";

export const ProductCardStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  background: white;
  border-radius: 30px;
  box-sizing: border-box;
  box-shadow: 0 0 15px 9px rgba(0,0,0,0.03);
  .product-card {
    &__header {
      position: relative;
      overflow: hidden;
      width: 320px;
      height: 200px;
      display: flex;
      justify-content: center;
      &__image {
        width: 320px;
        border-radius: 30px 30px 0 0;
      }
      &__button {
        position: absolute;
        top: 35%;
        display: none;
      }
    }
    &__content {
      padding: 0 1rem;
      height: 180px;
      &__name {
        font-size: 1.4rem;
        text-transform: capitalize;
        margin: 0.8rem 0;
      }
      &__description {
        font-size: 1rem;
        color: #8b8a8b;
      }
      &__options {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &__back {
          cursor: pointer;
          display: flex;
          margin: 0 0 0.5rem 0.1rem;
          align-items: baseline;
          width: 100%;
          p {
            margin: 0 0 0 0.1rem;
          }
          &:hover {
            color: var(--primary);
          }
          &__arrow {
            border: solid black;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 3px;
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
          }
        }
        &__radio {
          display: flex;
          cursor: pointer;
          font-weight: 500;
          position: relative;
          overflow: hidden;
          margin-bottom: 0.375em;
          width: 140px;
          input {
            position: absolute;
            display: none;
            &:checked + span {
              background-color: mix(#fff, var(--primary), 84%);
              &:before {
                box-shadow: inset 0 0 0 0.5rem var(--primary);
              }
            }
          }
          &__label {
            display: flex;
            align-items: center;
            padding: 0.375em 0;
            border-radius: 99em;
            transition: 0.25s ease;
            &:before {
              display: flex;
              flex-shrink: 0;
              content: "";
              background-color: #fff;
              width: 1.5em;
              height: 1.5em;
              border-radius: 50%;
              margin-right: 0.375em;
              transition: 0.25s ease;
              box-shadow: inset 0 0 0 0.125em var(--primary);
            }
          }
        }
      }
    }
    &__footer {
      padding: 0 1rem 1rem 1rem;
      width: 100%;
      display: flex;
      &__price {
        font-size: 1.2rem;
      }
      &__price-sold-out {
        font-size: 1.2rem;
        color: #8b8a8b;
        margin: 0 1rem 0 0;
      }
    }
  }
  &:hover {
    box-shadow: 0 0 15px 9px rgba(0,0,0,0.07);
    .product-card {
      &__header {
        border-radius: 30px 30px 0 0;
        background-color: #000000;
        &__image {
          opacity: 0.3;
        }
        &__button {
          display: block;
        }
      }
      &__content {
        &__name {
          color: var(--primary);
        }
      }
    }
  }
`;