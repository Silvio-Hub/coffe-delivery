import styled from "styled-components";

export const PaymentContainer = styled.nav`
  max-width: 1240px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    font-family: "Baloo 2";
    font-size: ${(props) => props.theme["baloo-title-xs"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }

  .content {
    gap: 2rem;
    display: grid;
    grid-template-columns: 60% 1fr;
  }

  .orders-placed {
    background: ${(props) => props.theme["base-card"]};
    padding: 3rem;
    margin-top: 1rem;
    border-radius: 5px 30px;
  }

  .purchase-orders {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin-top: 2rem;
    border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  }

  .purchase-orders:first-child {
    margin-top: 0;
  }

  .teste1 {
    margin-bottom: 2rem;
  }

  .purchase-orders p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: ${(props) => props.theme["roboto-text-m"]};
  }

  .purchase-orders > p:nth-child(3) {
    text-align: right;
  }

  .image {
    height: 64px;
    width: 64px;
  }

  .increment-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 8px;
    border-radius: 5px;
    background-color: ${(props) => props.theme["base-button"]};
  }

  .quantity {
    font-size: ${(props) => props.theme["roboto-text-m"]};
    color: ${(props) => props.theme["base-title"]};
  }

  .increment-button button {
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

  .increment-group {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .remove {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme["base-button"]};
    font-size: 0.7rem;
    color: ${(props) => props.theme["base-text"]};
    text-transform: uppercase;
    border: none;
    cursor: pointer;
  }

  .remove-icon {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme["purple"]};
    margin-right: 0.3rem;
  }

  .order-price {
    font-weight: bold;
    font-size: ${(props) => props.theme["roboto-text-m"]};
    color: ${(props) => props.theme["base-text"]};
  }

  .total-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
  }

  .delivery {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .final-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .confirm {
    background-color: ${(props) => props.theme.yellow};
    width: 100%;
    color: ${(props) => props.theme.white};
    border-radius: 5px;
    padding: 0.75rem 0.5rem;
    border: none;
    margin-top: 1.5rem;
    text-transform: uppercase;
    font-size: ${(props) => props.theme["roboto-button-g"]};
    cursor: pointer;
  }

  .text-description {
    font-size: ${(props) => props.theme["roboto-text-s"]};
    color: ${(props) => props.theme["base-text"]};
  }

  .value {
    font-size: ${(props) => props.theme["roboto-text-m"]};
    color: ${(props) => props.theme["base-text"]};
  }

  .total-value {
    font-weight: bold;
    font-size: ${(props) => props.theme["roboto-text-l"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
