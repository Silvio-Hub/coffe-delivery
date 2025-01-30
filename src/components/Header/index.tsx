import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import coffeLogo from "../../assets/Logo.svg";
import { NavbarContainer } from "./style";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";

export function Header() {
  const { getTotalQuantity } = useCart();
  const totalQuantity = getTotalQuantity();
  const location = useLocation();

  const handleCartClick = (event: React.MouseEvent) => {
    if (totalQuantity < 1) {
      event.preventDefault();
    }
  };
  const isConfirmationPage = location.pathname === "/confirmation";

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
            {!isConfirmationPage && totalQuantity > 0 && (
              <span className="count">{getTotalQuantity()}</span>
            )}
          </Link>
        </nav>
      </div>
    </NavbarContainer>
  );
}
