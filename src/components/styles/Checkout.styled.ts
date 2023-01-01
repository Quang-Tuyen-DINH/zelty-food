import styled from "styled-components";

export const CheckoutStyled = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(60px, auto);
  .zelty-restaurant__checkout {
    &__left {
      grid-column: 1 / 3;
      grid-row: 1;
      display: flex;
      gap: 20px;
      flex-direction: column;
    }
    &__right {
      grid-column: 3 / 4;
      grid-row: 1;
    }
  }
`;