import { FormContainer, PaymentMethod } from "./style";
import { useContext, useState } from "react";
import axios from "axios";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { FormContext, FormData } from "../../contexts/FormContext";

export function AdressForm() {
  const { formData, setFormData, setPaymentMethod } = useContext(FormContext);

  const [{}, setErroCep] = useState("");
  const [formErrors, setFormErrors] = useState({
    zipCode: "",
    street: "",
    residentialNumber: "",
    district: "",
    city: "",
    uf: "",
  });

  const validarCep = (zipCode: string) => {
    const regexCep = /^[0-9]{5}-?[0-9]{3}$/;
    return regexCep.test(zipCode);
  };

  const buscarEndereco = async (zipCode: string) => {
    if (validarCep(zipCode)) {
      setErroCep("");
      try {
        const resposta = await axios.get(
          `https://viacep.com.br/ws/${zipCode.replace("-", "")}/json/`
        );
        const dados = resposta.data;

        if (!dados.erro) {
          setFormData((prevData: FormData) => ({
            ...prevData,
            street: dados.logradouro,
            district: dados.bairro,
            city: dados.localidade,
            uf: dados.uf,
          }));
        } else {
          setErroCep("CEP não encontrado");
        }
      } catch (error) {
        setErroCep("Erro ao buscar CEP");
      }
    } else {
      setErroCep("CEP inválido");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleCepBlur = () => {
    buscarEndereco(formData.zipCode);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name !== "complement" && value.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Campo obrigatório",
      }));
    }
  };

  const handleClickPayment = (
    e: React.MouseEvent<HTMLButtonElement>,
    metodo: string
  ) => {
    e.preventDefault();
    setPaymentMethod(metodo);
  };

  return (
    <FormContainer>
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
              <div className="zipCode">
                <input
                  type="text"
                  placeholder="CEP"
                  value={formData.zipCode}
                  name="zipCode"
                  onChange={handleChange}
                  onBlur={handleCepBlur}
                />
              </div>
              <div className="street">
                <input
                  type="text"
                  placeholder="Rua"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    borderColor: formErrors.street ? "red" : "",
                  }}
                />
              </div>
              <div className="number-complement">
                <input
                  type="text"
                  placeholder="Número"
                  name="residentialNumber"
                  value={formData.residentialNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    borderColor: formErrors.residentialNumber ? "red" : "",
                  }}
                />
                <div className="complement">
                  <input
                    type="text"
                    placeholder="Complemento"
                    name="complement"
                    value={formData.complement}
                    onChange={handleChange}
                  />
                  <span className="optional">Opcional</span>
                </div>
              </div>
              <div className="district">
                <input
                  type="text"
                  placeholder="Bairro"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    borderColor: formErrors.district ? "red" : "",
                  }}
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    borderColor: formErrors.city ? "red" : "",
                  }}
                />
                <input
                  type="text"
                  placeholder="UF"
                  name="uf"
                  value={formData.uf}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </div>
        </form>
      </section>
      <PaymentMethod>
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
            <button onClick={(e) => handleClickPayment(e, "Cartão de Crédito")}>
              <span>
                <CreditCard size={32} className="icon" />
              </span>
              Cartão de credito
            </button>
            <button onClick={(e) => handleClickPayment(e, "Cartão de Débito")}>
              <span>
                <Bank size={32} className="icon" />
              </span>
              Cartão de débito
            </button>
            <button onClick={(e) => handleClickPayment(e, "Dinheiro")}>
              <span>
                <Money size={32} className="icon" />
              </span>
              Dinheiro
            </button>
          </div>
        </div>
      </PaymentMethod>
    </FormContainer>
  );
}
