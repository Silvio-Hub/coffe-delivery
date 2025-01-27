import { styled } from "styled-components";

export const CardsContainer = styled.div`
  .product-list-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 2rem;
  }

  .product-list-container h2 {
    font-family: "Baloo 2";
    font-size: ${(props) => props.theme["baloo-title-l"]};
    color: ${(props) => props.theme["base-subtitle"]};
    margin-top: 3rem;
  }

  .product-list {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1.8rem;
    margin-top: 4rem;
  }

  .product-list:nth-last-child(1) {
    justify-content: flex-start;
  }

  .product-card {
    background-color: ${(props) => props.theme["base-card"]};
    padding: 1.5rem;
    text-align: center;
    border-radius: 0 30px;
    width: 17rem;
    height: 19.375rem;
  }

  .product-name {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    padding-top: 1rem;
  }

  h3 {
    font-family: "Baloo 2";
    padding-top: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: ${(props) => props.theme["title-s"]};
  }

  .card-information {
    margin-top: 0.5rem;
    color: ${(props) => props.theme["base-label"]};
    font-size: ${(props) => props.theme["roboto-text-s"]};
  }

  .product-word {
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 0.625rem;
    border-radius: 30px;
    padding: 0.3rem;
    margin: 0 0.2rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  .productQuantity {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
  }

  .group {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 7.5rem;
    width: 7.5;
  }

  .cards {
    position: relative;
    top: -3rem;
  }

  .pt-br {
    font-size: ${(props) => props.theme["roboto-text-s"]};
  }

  .price {
    font-family: "Baloo 2";
    font-size: ${(props) => props.theme["baloo-title-m"]};
    font-weight: 900;
    color: ${(props) => props.theme["base-text"]};
  }

  .button-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme["base-button"]};
  }

  .quantity {
    font-size: ${(props) => props.theme["roboto-text-m"]};
    color: ${(props) => props.theme["base-title"]};
  }

  .button-group button {
    width: 14px;
    height: 14px;
    font-size: 25px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: ${(props) => props.theme["purple"]};
    border: none;
    cursor: pointer;
  }

  .cards-cart {
    background-color: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme["white"]};
    padding: 8px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;
