import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { ConfirmationContainer } from "./style";
import motorcycle from "/img/delivery.png";
import { FormContext } from "../../contexts/FormContext";
import { useContext } from "react";

export function Confirmation() {
  const { formData, paymentMethod } = useContext(FormContext);
  const deliveryAddress = `${formData.street}, ${formData.residentialNumber}${formData.complement ? " - " + formData.complement : ""}`;
  const districtAddress = `${formData.district} - ${formData.city}, ${formData.uf}`;

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
                Entrega em <span className="bold">{deliveryAddress}</span>
              </p>
              <p>{districtAddress}</p>
            </div>
          </div>
          <div className="delivery-information">
            <span className="timer icon">
              <Timer size={20} />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p className="bold">20 min - 30 min</p>
            </div>
          </div>
          <div className="delivery-information">
            <span className="coin icon">
              <CurrencyDollar size={20} />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p className="bold">{paymentMethod}</p>
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
