import { useState } from "react";
import { CardsContainer } from "./cardsStyle";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { useCart } from "./cartContext";

interface IProduct {
  id: number;
  name: string | string[];
  description: string;
  information: string;
  price: number;
  image: string;
}

interface productCardProps {
  product: IProduct;
}

export function ProductCards({ product }: productCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setQuantity(1);
  };

  const noSplitWords: string[] = ["Com Leite", "Sem Açúcar", "Extra Forte"];

  const formattedName = Array.isArray(product.name)
    ? product.name.join(" ")
    : product.name;

  let nameWithNoBreakSpace = formattedName;
  noSplitWords.forEach((phrase) => {
    const regex = new RegExp(phrase, "g");
    nameWithNoBreakSpace = nameWithNoBreakSpace.replace(
      regex,
      phrase.replace(" ", "\u00A0")
    );
  });

  return (
    <CardsContainer>
      <div className="product-card">
        <div className="cards">
          <img src={product.image} alt="" />
          <p className="product-name">
            {Array.isArray(nameWithNoBreakSpace)
              ? nameWithNoBreakSpace.map((word, index) => (
                  <span key={index} className="product-word">
                    {word}{" "}
                  </span>
                ))
              : nameWithNoBreakSpace.split(" ").map((word, index) => (
                  <span key={index} className="product-word">
                    {word}{" "}
                  </span>
                ))}
          </p>
          <h3>{product.description}</h3>
          <p className="card-information">{product.information}</p>
          <div className="productQuantity">
            <p className="pt-br">
              R${" "}
              <span className="price">
                {product.price.toFixed(2).replace(".", ",")}
              </span>
            </p>
            <div className="group">
              <div className="button-group">
                <button className="minus" onClick={decrementQuantity}>
                  &minus;
                </button>
                <span className="quantity">{quantity}</span>
                <button onClick={incrementQuantity}>&#43;</button>
              </div>
              <button className="cards-cart" onClick={handleAddToCart}>
                <ShoppingCartSimple size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </CardsContainer>
  );
}
