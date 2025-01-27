import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.background};

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1240px;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
  }

  img {
    width: 5.309rem;
    height: 2.5rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .navbar img {
    margin-right: 1.25rem;
  }

  span {
    margin-right: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple-dark"]};
    padding: 0.5rem;
    border-radius: 6px;
    font-size: 0.875rem;
  }

  .pin {
    color: ${(props) => props.theme.purple};
    margin-right: 0.3rem;
  }

  .cart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    background-color: ${(props) => props.theme["yellow-light"]};
    border-radius: 6px;
    text-decoration: none;
  }

  .cart-icon {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  .count {
    font-size: ${(props) => props.theme["roboto-text-s"]};
    border-radius: 50%;
    position: absolute;
    background: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["white"]};
    width: 20px;
    height: 20px;
    margin-top: -2rem;
    margin-left: 2.9rem;
  }
`;
