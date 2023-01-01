import styled from "styled-components";

export const CheckoutInputStyled = styled.div`
  .zelty-restaurant__checkout__form {
    display: flex;
    flex-wrap: wrap;
    &__input {
      margin: 0 110px 10px 0;
      width: 280px;
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
    &__form-button {
      margin: 10px 0 0 0;
        width: 300px;
      }
  }
`;