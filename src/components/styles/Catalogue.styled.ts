import styled from "styled-components";

export const CatalogueStyled = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(60px, auto);

  .zelty-restaurant__catalogue {
    &__left {
      grid-column: 1 / 3;
      grid-row: 1;
      display: flex;
      gap: 20px;
      flex-direction: column;
      &__products {
        grid-row: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        gap: 40px 70px;
      }
    }
    &__right {
      grid-column: 3 / 4;
      grid-row: 1;
    }
  }
`;