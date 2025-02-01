import styled from "styled-components";

export const HeaderContainer = styled.div`
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

export const BackgroundContainer = styled.div`
  padding: 10rem 0 5rem;
  /* background-color: #fafafa; */
  z-index: -1;

  .background-container {
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background:
      url("/src/assets/svg/vector.svg") no-repeat 0 20%,
      url("/src/assets/svg/Vector1.svg") no-repeat 40% 0,
      url("/src/assets/svg/Vector2.svg") no-repeat 40% 20%,
      url("/src/assets/svg/Vector3.svg") no-repeat 60% 20%,
      url("/src/assets/svg/Vector4.svg") no-repeat 5% 0,
      url("/src/assets/svg/Vector5.svg") no-repeat 100% 20%,
      url("/src/assets/svg/Vector6.svg") no-repeat 100% 0,
      url("/src/assets/svg/Vector7.svg") no-repeat 35% 20%,
      url("/src/assets/svg/Vector8.svg") no-repeat 50% 5%,
      url("/src/assets/svg/Vector9.svg") no-repeat 10% 20%,
      url("/src/assets/svg/Vector10.svg") no-repeat 95% 5%;
    opacity: 0.7;
    filter: blur(30px);
  }
`;
