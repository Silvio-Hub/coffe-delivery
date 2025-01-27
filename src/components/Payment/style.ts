import styled from "styled-components";

export const PaymentContainer = styled.nav`
  max-width: 1240px;
  margin: 0 auto;
  padding: 2rem;

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme["yellow-dark"]};
  }

  legend {
    display: flex;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: ${(props) => props.theme["roboto-text-m"]};
  }

  legend span {
    color: ${(props) => props.theme["yellow-dark"]};
    margin-right: 0.5rem;
  }

  .delivery-address {
    font-size: ${(props) => props.theme["roboto-text-s"]};
    color: ${(props) => props.theme["base-text"]};
    margin-left: 1.9rem;
  }

  .adress {
    background-color: ${(props) => props.theme["base-card"]};
    margin-bottom: 2rem;
    padding: 3rem;
    border-radius: 8px;
    margin-top: 1rem;
  }

  .content {
    gap: 2rem;
    display: grid;
    grid-template-columns: 60% 1fr;
  }

  .adress-group {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
  }

  .cep {
    width: 40%;
  }

  .street {
    grid-column: 1 / -1;
    width: 100%;
  }

  .number-complement {
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 1rem;
  }

  .complement {
    position: relative;
  }

  .complement input {
    padding-right: 60px;
  }

  .complement .optional {
    position: absolute;
    bottom: 15px;
    right: 10px;
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.75rem;
    pointer-events: none;
    font-style: italic;
  }

  .district {
    display: grid;
    grid-template-columns: 40% 2fr 70px;
    gap: 1rem;
  }

  input {
    padding: 0.9rem;
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    border: 0.2px solid ${(props) => props.theme["base-button"]};
    background-color: ${(props) => props.theme["base-input"]};
  }

  input::placeholder {
    color: ${(props) => props.theme["base-label"]};
    font-size: ${(props) => props.theme["roboto-text-s"]};
  }
`;
