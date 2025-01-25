import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* background: red; */

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: ${(props) => props.theme["baloo-title-xl"]};
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${(props) => props.theme["base-title"]};
  }

  .container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .text {
    font-size: ${(props) => props.theme["roboto-text-l"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }

  .information {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
  }

  .image {
    display: flex;
    justify-content: flex-end;
    align-self: end;
  }

  .image img {
    width: 29.75rem;
    max-width: 25rem;
    height: auto;
  }

  .cart {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .cartIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
  }

  .icon1 {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
  .icon2 {
    background-color: ${(props) => props.theme["base-text"]};
  }
  .icon3 {
    background-color: ${(props) => props.theme["yellow"]};
  }
  .icon4 {
    background-color: ${(props) => props.theme["purple"]};
  }
`;
