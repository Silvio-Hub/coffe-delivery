import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import coffeLogo from "../../assets/Logo.svg";
import { NavbarContainer } from "./style";

export function Header() {
  return (
    <NavbarContainer>
      <div className="navbar">
        <img src={coffeLogo} alt="" />
        <nav>
          <span>
            <MapPin size={20} className="pin" />
            São Paulo, SP
          </span>
          <a href="#">
            <ShoppingCart size={20} className="cart" />
          </a>
        </nav>
      </div>
    </NavbarContainer>
  );
}
