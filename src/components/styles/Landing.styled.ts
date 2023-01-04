import styled from "styled-components";

export const LandingStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px 0 0 0;
  .zelty-restaurant__landing {
    &__title {
      display: flex;
      justify-content: center;
      width: 100%;
      font-size: 2.5rem;
      font-weight: 700;
      span {
        padding: 0 0 0 10px;
        color: var(--primary);
      }
    }
    &__commence {
      margin: 100px 0 0 0;
      &__button {
      width: 300px;
      }
    }
  }
`;
