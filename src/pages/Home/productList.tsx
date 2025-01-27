import { CardsContainer } from "./cardsStyle";
import { useCart } from "./cartContext";
import { ProductCards } from "./productCards";

export function ProductList() {
  const { products } = useCart();

  return (
    <CardsContainer>
      <div className="product-list-container">
        <h2>Nossos cafés</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      </div>
    </CardsContainer>
  );
}
