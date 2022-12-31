import styled from "styled-components";

export const NavBarStyled = styled.div`
  .zelty-restaurant__nav-bar {
    display: flex;
    align-items: center;
    padding: 0;
    &__logo {
      list-style-type: none;
      img {
        height: 35px;
        margin: 20px 220px 0 0;
      }
    }
    &__element {
      list-style-type: none;
      display: inline;
      margin: 0 30px;
      a {
        font-weight: 600;
        font-size: 1.1rem;
        text-decoration: none;
        color: var(--primary);
      }
      a:hover {
        color: var(--secondary);
      }
    }
  }
`;
