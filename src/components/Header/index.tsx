import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import coffeLogo from "../../assets/Logo.svg";
import { NavbarContainer } from "./style";
import { Link } from "react-router-dom";

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
          <Link to="/payment" className="cart">
            <ShoppingCart size={20} className="cart-icon" />
            <span className="count">3</span>
          </Link>
        </nav>
      </div>
    </NavbarContainer>
  );
}
