import { styled } from "styled-components";

export const FormContainer = styled.div`
  h1 {
    font-family: "Baloo 2";
    font-size: ${(props) => props.theme["baloo-title-xs"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }

  input:focus {
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
    margin-bottom: 0.75rem;
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

  .zipCode {
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

  .payment {
    background-color: ${(props) => props.theme["base-card"]};
    padding: 3rem;
    border-radius: 8px;
  }

  .payment .title {
    display: flex;
  }

  .title span .icon {
    color: ${(props) => props.theme["purple"]};
    height: 22px;
    width: 22px;
    margin-right: 0.5rem;
  }

  .payment .title {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: ${(props) => props.theme["roboto-text-m"]};
  }

  .payment .text {
    font-size: ${(props) => props.theme["roboto-text-s"]};
    color: ${(props) => props.theme["base-text"]};
    margin-left: 1.9rem;
  }

  .button-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
  }

  .button-group button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 32%;
    border: none;
    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 8px;
    font-size: ${(props) => props.theme["roboto-button-m"]};
    color: ${(props) => props.theme["base-text"]};
    text-transform: uppercase;
  }

  .button-group span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-group .icon {
    height: 1rem;
    width: 1rem;
    margin-right: 1rem;
    color: ${(props) => props.theme["purple"]};
  }

  button:focus {
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    background: ${(props) => props.theme["purple-light"]};
  }
`;
