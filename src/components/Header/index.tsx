import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import coffeLogo from "../../assets/Logo.svg";
import { NavbarContainer } from "./style";
import { Link } from "react-router-dom";
import { useCart } from "../../pages/Home/cartContext";

export function Header() {
  const { getTotalQuantity } = useCart();
  const totalQuantity = getTotalQuantity();

  const handleCartClick = (event: React.MouseEvent) => {
    if (totalQuantity < 1) {
      event.preventDefault();
    }
  };

  return (
    <NavbarContainer>
      <div className="navbar">
        <img src={coffeLogo} alt="" />
        <nav>
          <span>
            <MapPin size={20} className="pin" />
            São Paulo, SP
          </span>
          <Link
            to={totalQuantity >= 1 ? "/payment" : "#"}
            className={`cart ${totalQuantity < 1 ? "disabled" : ""}`}
            onClick={handleCartClick}
          >
            <ShoppingCart size={20} className="cart-icon" />
            {totalQuantity > 0 && (
              <span className="count">{getTotalQuantity()}</span>
            )}
          </Link>
        </nav>
      </div>
    </NavbarContainer>
  );
}
