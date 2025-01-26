import { CardsContainer } from "./cardsStyle";
import { ProductCards } from "./productCards";
import traditionalCoffe from "../../assets/img/traditional-coffee.png";
import americano from "../../assets/img/american-coffee.png";
import cremoso from "../../assets/img/cremoso-coffee.png";
import gelado from "../../assets/img/gelado-coffee.png";
import comLeite from "../../assets/img/tradicional-com-leite.png";
import latte from "../../assets/img/late-coffee.png";
import capuccino from "../../assets/img/capuccino.png";
import macchiato from "../../assets/img/macchiato.png";
import mocaccino from "../../assets/img/mocaccino.png";
import chocolate from "../../assets/img/chocolate.png";
import cubano from "../../assets/img/cubano.png";
import havaiano from "../../assets/img/havaiano.png";
import arabe from "../../assets/img/árabe.png";
import irlandes from "../../assets/img/irlandês.png";

export function ProductList() {
  const products = [
    {
      id: 1,
      name: "Tradicional",
      description: "Expresso Tradicional",
      information: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
      image: traditionalCoffe,
    },
    {
      id: 2,
      name: "Tradicional",
      description: "Expresso Americano",
      information: "Expresso diluído, menos intenso que o tradicional",
      price: 1.5,
      image: americano,
    },
    {
      id: 3,
      name: "Tradicional",
      description: "Expresso Tradicional",
      information: "Café expresso tradicional com espuma cremosa",
      price: 1.5,
      image: cremoso,
    },
    {
      id: 4,
      name: "Tradicional Gelado",
      description: "Expresso Americano",
      information: "Bebida preparada com café expresso e cubos de gelo",
      price: 1.5,
      image: gelado,
    },
    {
      id: 5,
      name: "Tradicional Com Leite",
      description: "Expresso Tradicional",
      information: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 1.5,
      image: comLeite,
    },
    {
      id: 6,
      name: "Tradicional Com Leite",
      description: "Expresso Americano",
      information:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 1.5,
      image: latte,
    },
    {
      id: 7,
      name: "Tradicional Com Leite",
      description: "Expresso Tradicional",
      information:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 1.5,
      image: capuccino,
    },
    {
      id: 8,
      name: "Tradicional Com Leite",
      description: "Expresso Americano",
      information:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 1.5,
      image: macchiato,
    },
    {
      id: 9,
      name: "Tradicional Com Leite",
      description: "Expresso Tradicional",
      information: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 1.5,
      image: mocaccino,
    },
    {
      id: 10,
      name: "Especial Com Leite",
      description: "Expresso Americano",
      information:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 1.5,
      image: chocolate,
    },
    {
      id: 11,
      name: "Especial alcoólico gelado",
      description: "Expresso Tradicional",
      information:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 1.5,
      image: cubano,
    },
    {
      id: 12,
      name: "Especial",
      description: "Expresso Americano",
      information: "Bebida adocicada preparada com café e leite de coco",
      price: 1.5,
      image: havaiano,
    },
    {
      id: 13,
      name: "EspecialA",
      description: "Expresso Tradicional",
      information: "Bebida preparada com grãos de café árabe e especiarias",
      price: 1.5,
      image: arabe,
    },
    {
      id: 14,
      name: "Especial Alcoólico",
      description: "Expresso Americano",
      information: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 1.5,
      image: irlandes,
    },
  ];

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
