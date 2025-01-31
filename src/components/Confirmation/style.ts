import styled from "styled-components";

export const ConfirmationContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    font-family: "Baloo 2";
    font-size: ${(props) => props.theme["baloo-title-l"]};
    color: ${(props) => props.theme["yellow-dark"]};
  }

  .text {
    font-size: ${(props) => props.theme["roboto-text-l"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }

  .information-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 2.5rem;
  }

  .content-box {
    border: 1px solid transparent;
    border-radius: 8px 30px;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    background:
      linear-gradient(white, white) padding-box,
      linear-gradient(
          to right,
          ${(props) => props.theme["yellow-dark"]},
          ${(props) => props.theme["purple"]}
        )
        border-box;
    background-clip: padding-box, border-box;
  }

  .delivery-information {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .delivery-information:last-child {
    margin-bottom: 0;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
  }

  .pin {
    background-color: ${(props) => props.theme["purple"]};
  }
  .timer {
    background-color: ${(props) => props.theme["yellow"]};
  }
  .coin {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }

  .image {
    text-align: right;
  }

  .bold {
    font-weight: bold;
  }
`;
