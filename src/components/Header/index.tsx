import { House, MapPin, ShoppingCart } from "@phosphor-icons/react";
import coffeLogo from "/svg/Logo.svg";
import { NavbarContainer } from "./style";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export function Header() {
  const { getTotalQuantity, resetCart } = useCart();
  const totalQuantity = getTotalQuantity();
  const location = useLocation();

  const handleCartClick = (event: React.MouseEvent) => {
    if (totalQuantity < 1) {
      event.preventDefault();
    }
  };
  const isConfirmationPage = location.pathname === "/confirmation";

  const handleBackHome = () => {
    resetCart();
  };

  return (
    <NavbarContainer>
      <div className="navbar">
        <img src={coffeLogo} alt="" />
        <nav>
          {isConfirmationPage && (
            <Link to="/" className="home" onClick={handleBackHome}>
              <House size={30} />
            </Link>
          )}
          <span>
            <MapPin size={20} weight="fill" className="pin" />
            São Paulo, SP
          </span>
          <Link
            to={totalQuantity >= 1 ? "/payment" : "#"}
            className={`cart ${totalQuantity < 1 ? "disabled" : ""}`}
            onClick={handleCartClick}
          >
            <ShoppingCart size={20} weight="fill" className="cart-icon" />
            {!isConfirmationPage && totalQuantity > 0 && (
              <span className="count">{getTotalQuantity()}</span>
            )}
          </Link>
        </nav>
      </div>
    </NavbarContainer>
  );
}
