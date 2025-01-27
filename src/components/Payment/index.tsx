import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";
import { PaymentContainer } from "./style";
import { IProduct, useCart } from "../../pages/Home/cartContext";

interface GroupedItem extends IProduct {
  quantity: number;
}

export function Payment() {
  const { items, products, updateQuantity, removeFromCart } = useCart();

  const handleCardClick = (event: React.MouseEvent) => {
    event.preventDefault();
  };

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

  return (
    <PaymentContainer>
      <div className="content">
        <section>
          <header>
            <h1>Complete seu pedido</h1>
          </header>
          <form action="" className="teste">
            <div className="adress">
              <legend>
                <span>
                  <MapPinLine size={22} />
                </span>
                Endereço de Entrega
              </legend>
              <p className="delivery-address">
                Informe o endereço onde deseja receber seu pedido
              </p>
              <div className="adress-group">
                <div className="cep">
                  <input type="text" placeholder="CEP" />
                </div>
                <div className="street">
                  <input type="text" placeholder="Rua" />
                </div>
                <div className="number-complement">
                  <input type="text" placeholder="Número" />
                  <div className="complement">
                    <input type="text" placeholder="Complemento" />
                    <span className="optional">Opcional</span>
                  </div>
                </div>
                <div className="district">
                  <input type="text" placeholder="Bairro" />
                  <input type="text" placeholder="Cidade" />
                  <input type="text" placeholder="UF" />
                </div>
              </div>
            </div>

            <div className="payment">
              <p className="title">
                <span>
                  <CurrencyDollar size={32} className="icon" />
                </span>
                Pagamento
              </p>
              <p className="text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>

              <div className="button-group">
                <button onClick={handleCardClick}>
                  <span>
                    <CreditCard size={32} className="icon" />
                  </span>
                  Cartão de credito
                </button>
                <button onClick={handleCardClick}>
                  <span>
                    <Bank size={32} className="icon" />
                  </span>
                  Cartão de débito
                </button>
                <button onClick={handleCardClick}>
                  <span>
                    <Money size={32} className="icon" />
                  </span>
                  Dinheiro
                </button>
              </div>
            </div>
          </form>
        </section>

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
                  <p>{item.name}</p>
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

              <button className="confirm">Confirmar pedido</button>
            </div>
          </div>
        </section>
      </div>
    </PaymentContainer>
  );
}
