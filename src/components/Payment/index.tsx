import { Trash } from "@phosphor-icons/react";
import { PaymentContainer } from "./style";
import { IProduct, useCart } from "../../contexts/cartContext";
import { AdressForm } from "../AdressForm";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../contexts/FormContext";
import { useContext } from "react";

interface GroupedItem extends IProduct {
  quantity: number;
}

export function Payment() {
  const { items, products, updateQuantity, removeFromCart } = useCart();
  const { formData, formErrors } = useContext(FormContext);
  const navigate = useNavigate();

  const incrementQuantity = (productId: number) => {
    const item = items.find((item) => item.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

  const decrementQuantity = (productId: number) => {
    const item = items.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
      updateQuantity(productId, item.quantity - 1);
    }
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const product = products.find((prod) => prod.id === item.id);
      if (product) {
        return total + product.price * item.quantity;
      }
      return total;
    }, 0);
  };

  const calculateFinalPrice = () => {
    const total = calculateTotal();
    const deliveryFee = 3.5;
    return total + deliveryFee;
  };

  const groupedItems = items.reduce<Record<number, GroupedItem>>(
    (acc, item) => {
      const product = products.find((prod) => prod.id === item.id);
      if (product) {
        if (!acc[product.id]) {
          acc[product.id] = { ...product, quantity: 0 };
        }
        acc[product.id].quantity += item.quantity;
      }
      return acc;
    },
    {}
  );

  const handleRemoveItem = (productId: number) => {
    removeFromCart(productId);
  };

  const handleRedirect = () => {
    const hasErrors = Object.values(formErrors).some((error) => error !== "");
    if (hasErrors) {
      alert("Por favor, preencha o formulário corretamente.");
      return;
    }

    const isFormValid =
      formData.street &&
      formData.residentialNumber &&
      formData.district &&
      formData.city;

    if (!isFormValid) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    navigate("/confirmation", {
      state: {
        formData,
        groupedItems,
        total: calculateTotal(),
        deliveryFee: 3.5,
        finalPrice: calculateFinalPrice(),
      },
    });
  };

  return (
    <PaymentContainer>
      <div className="content">
        <AdressForm />
        <section>
          <header>
            <h1>Cafés selecionados</h1>
          </header>

          <div className="orders-placed">
            {Object.values(groupedItems).map((item) => (
              <div key={item.id} className="purchase-orders">
                <div>
                  <img src={item.image} alt={item.name} className="image" />
                </div>
                <div className="teste1">
                  <p>{item.description}</p>
                  <div className="increment-group">
                    <div className="increment-button">
                      <button
                        className="minus"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        &minus;
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item.id)}>
                        &#43;
                      </button>
                    </div>
                    <button
                      className="remove"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash size={32} className="remove-icon" />
                      Remover
                    </button>
                  </div>
                </div>
                <p className="order-price">
                  R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                </p>
              </div>
            ))}

            <div>
              <div className="total-items">
                <p className="text-description">Total de itens</p>
                <p className="value">
                  R$ {calculateTotal().toFixed(2).replace(".", ",")}
                </p>
              </div>
              <div className="delivery">
                <p className="text-description">Entrega</p>
                <p className="value">R$ 3,50</p>
              </div>
              <div className="final-price">
                <p className="total-value">Total</p>
                <p className="total-value">
                  R$ {calculateFinalPrice().toFixed(2).replace(".", ",")}
                </p>
              </div>

              <button onClick={handleRedirect} className="confirm">
                Confirmar pedido
              </button>
            </div>
          </div>
        </section>
      </div>
    </PaymentContainer>
  );
}
