import { styled } from "styled-components";

export const CardsContainer = styled.div`
  .product-list-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 2rem;
  }

  .product-list {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 3rem;
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
    width: 16rem;
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
  }

  img {
    height: 7.5rem;
    width: 7.5;
  }

  .cards {
    position: relative;
    top: -3rem;
  }
`;
