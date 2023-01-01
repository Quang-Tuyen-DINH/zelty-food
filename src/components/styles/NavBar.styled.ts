import styled from "styled-components";

export const NavBarStyled = styled.div`
  .zelty-restaurant__nav-bar {
    display: flex;
    align-items: center;
    margin: 32px 0;
    padding: 0;
    &__logo {
      width: 30%;
      list-style-type: none;
      img {
        height: 35px;
      }
    }
    &__element {
      list-style-type: none;
      display: inline;
      margin: 0 30px;
      a {
        font-weight: 600;
        font-size: 1.1rem;
        padding: 0 0 5px 0;
        text-decoration: none;
        color: var(--primary);
      }
      a:hover {
        color: var(--secondary);
      }
    }
    &__element-active {
      list-style-type: none;
      display: inline;
      margin: 0 30px;
      a {
        font-weight: 600;
        font-size: 1.1rem;
        padding: 0 0 5px 0;
        text-decoration: none;
        border-bottom: 3px solid var(--primary);
        color: var(--primary);
      }
    }
  }
`;
