import { useCart } from "../../contexts/cartContext";
import { ProductCards } from "../ProductCards";
import { ProductListContainer } from "./style";

export function ProductList() {
  const { products } = useCart();

  return (
    <ProductListContainer>
      <div className="product-list-container">
        <h2>Nossos cafés</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      </div>
    </ProductListContainer>
  );
}
