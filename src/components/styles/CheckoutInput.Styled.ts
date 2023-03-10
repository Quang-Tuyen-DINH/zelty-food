import styled from "styled-components";

export const CheckoutInputStyled = styled.div`
  .zelty-restaurant__checkout__form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &__input {
      margin: 0 110px 10px 0;
      width: 200px;
      label {
        display: block;
        margin: 0 0 10px 0;
        font-weight: 500;
        input {
          all: unset;
          background: white;
          border-radius: 30px;
          padding: 0.8rem 1.6rem;
          margin: 10px 0 0 0;
          font-weight: 400;
          width: 250px;
          transition: 0.3s;
          box-shadow: 0 0 8px 1px rgba(0,0,0,0.03);
      
          &:focus {
            box-shadow: inset 0 0 0 2px var(--primary);
          }
        }
      }
    }
    &__confirm {
      width: 100%;
      display: contents;
      &__button{
        margin: 10px 0 0 0;
        width: 300px;
        background: var(--primary);
        &:hover {
          background: var(--secondary);
        }
      }
    }
    &__unconfirm {
      width: 100%;
      display: contents;
      &__button{
        margin: 10px 0 0 0;
        width: 300px;
        &:disabled {
          background: #d8d8d8;
          cursor: initial;
        }
      }
    }
  }
  .zelty-restaurant__checkout__empty {
    margin: auto;
    text-align: center;
  }
`;