import styled from "styled-components";

export const CartStyled = styled.div`
  background: white;
  border-radius: 30px;
  padding: 1rem 0.8rem;
  box-sizing: border-box;
  box-shadow: 0 0 15px 9px rgba(0,0,0,0.03);

  .zelty-restaurant__cart {
    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 1rem;
      &__table {
        text-align: right;
        h3 {
          margin: 0;
          font-size: 0.8rem;
          color: #878888;
          font-weight: normal;
        }
        span {
          font-weight: bold;
        }
      }
    }
    &__items {
      &__empty {
        text-align: center;
        margin: 0.6rem 0;
      }
      &__product {
        display: flex;
        margin: 0.6rem 0;
        justify-content: space-between;
        &__details {
          &__name {
            font-weight: 500;
            display: block;
            &__remove{
              cursor: pointer;
              position: relative;
              width: 32px;
              height: 32px;
              opacity: 0.3;
            }
            &__remove:hover {
              opacity: 1;
            }
            &__remove:before, &__remove:after {
              position: absolute;
              top: 3px;
              left: 15px;
              content: ' ';
              height: 16px;
              width: 2px;
              background-color: var(--warning);
            }
            &__remove:before {
              transform: rotate(45deg);
            }
            &__remove:after {
              transform: rotate(-45deg);
            }
          }
          &__option {
            display: block;
            margin: 0 0 0 1.2rem;
          }
        }
      }
    }
    &__foot {
      position: relative;
      border-top: 1px solid #eaeaea;

      &__total {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;

        .label {
          color: #8b8a8b;
        }
        .price {
          color: black;
          font-weight: 700;
          font-size: 1rem;
        }
      }
    }
  }
`;
