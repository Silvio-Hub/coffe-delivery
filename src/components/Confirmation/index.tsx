import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { ConfirmationContainer } from "./style";
import motorcycle from "../../assets/img/delivery.png";
import { FormContext } from "../../contexts/FormContext";
import { useContext } from "react";

export function Confirmation() {
  const { formData, paymentMethod } = useContext(FormContext);

  return (
    <ConfirmationContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p className="text">
        Agora é só aguardar que logo o café chegará até você
      </p>
      <div className="information-box">
        <div className="content-box">
          <div className="delivery-information">
            <span className="pin icon">
              <MapPin size={20} />
            </span>
            <div>
              <p>
                Entrega em {formData.street}, {formData.residentialNumber}
              </p>
              <p>
                {formData.district} - {formData.city}, {formData.uf}
              </p>
            </div>
          </div>
          <div className="delivery-information">
            <span className="timer icon">
              <Timer size={20} />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min</p>
            </div>
          </div>
          <div className="delivery-information">
            <span className="coin icon">
              <CurrencyDollar size={20} />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p>{paymentMethod}</p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={motorcycle} alt="" />
        </div>
      </div>
    </ConfirmationContainer>
  );
}
