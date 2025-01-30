import { HeaderContainer } from "./style";
import coffeCup from "../../assets/img/Imagem.png";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { ProductList } from "../ProductList";

export function Home() {
  return (
    <HeaderContainer>
      <div className="container">
        <div className="information-content">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p className="text">
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="information">
            <div className="cart">
              <span className="cartIcon icon1">
                <ShoppingCart size={16} />
              </span>
              <p>Compra simples e segura</p>
            </div>
            <div className="cart">
              <span className="cartIcon icon2">
                <Package size={16} />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="cart">
              <span className="cartIcon icon3">
                <Timer size={16} />
              </span>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="cart">
              <span className="cartIcon icon4">
                <Coffee size={16} />
              </span>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={coffeCup} alt="" />
        </div>
      </div>
      <ProductList />
    </HeaderContainer>
  );
}
