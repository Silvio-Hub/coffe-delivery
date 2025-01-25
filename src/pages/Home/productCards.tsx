import { useState } from "react";
import { CardsContainer } from "./cardsStyle";
import { ShoppingCart } from "@phosphor-icons/react";

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

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
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
          <img src={product.image} alt="xicara de café" />
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
            <span>R$ {product.price.toFixed(2)}</span>
            <div>
              <button onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
            </div>
            <a href="#">
              <ShoppingCart size={20} className="cart" />
            </a>
          </div>
        </div>
      </div>
    </CardsContainer>
  );
}
