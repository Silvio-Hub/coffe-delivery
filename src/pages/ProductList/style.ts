import { styled } from "styled-components";

export const ProductListContainer = styled.div`
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
`;
