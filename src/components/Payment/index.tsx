import { MapPinLine } from "@phosphor-icons/react";
import { PaymentContainer } from "./style";

export function Payment() {
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
              <p>
                <span>$</span> Pagamento
              </p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>

              <div>
                <button>Cartão de credito</button>
                <button>Cartão de débito</button>
                <button>Dinheiro</button>
              </div>
            </div>
          </form>
        </section>

        <section>
          <header>
            <h1>Cafés selecionados</h1>
          </header>

          <div>
            <div>tese</div>
          </div>
        </section>
      </div>
    </PaymentContainer>
  );
}
