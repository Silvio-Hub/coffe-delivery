import { FormContainer } from "./style";
import { useState } from "react";
import axios from "axios";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

export function AdressForm() {
  const [formData, setFormData] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const [erroCep, setErroCep] = useState("");
  const [metodoPagamento, setMetodoPagamento] = useState("");

  const validarCep = (cep: string) => {
    const regexCep = /^[0-9]{5}-?[0-9]{3}$/;
    return regexCep.test(cep);
  };

  const buscarEndereco = async (cep: string) => {
    if (validarCep(cep)) {
      setErroCep("");
      try {
        const resposta = await axios.get(
          `https://viacep.com.br/ws/${cep.replace("-", "")}/json/`
        );
        const dados = resposta.data;

        if (!dados.erro) {
          setFormData((prevData) => ({
            ...prevData,
            rua: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
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
  };

  const handleCepBlur = () => {
    buscarEndereco(formData.cep);
  };

  const handleMetodoPagamento = (metodo: string) => {
    setMetodoPagamento(metodo);
  };

  const handleClickPagamento = (
    e: React.MouseEvent<HTMLButtonElement>,
    metodo: string
  ) => {
    e.preventDefault();
    handleMetodoPagamento(metodo);
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
              <div className="cep">
                <input
                  type="text"
                  placeholder="CEP"
                  value={formData.cep}
                  name="cep"
                  onChange={handleChange}
                  onBlur={handleCepBlur}
                />
              </div>
              <div className="street">
                <input
                  type="text"
                  placeholder="Rua"
                  name="rua"
                  value={formData.rua}
                  onChange={handleChange}
                />
              </div>
              <div className="number-complement">
                <input
                  type="text"
                  placeholder="Número"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                />
                <div className="complement">
                  <input
                    type="text"
                    placeholder="Complemento"
                    name="complemento"
                    value={formData.complemento}
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
                  value={formData.bairro}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="UF"
                  name="uf"
                  value={formData.uf}
                  onChange={handleChange}
                />
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
              <button
                onClick={(e) => handleClickPagamento(e, "Cartão de Crédito")}
              >
                <span>
                  <CreditCard size={32} className="icon" />
                </span>
                Cartão de credito
              </button>
              <button
                onClick={(e) => handleClickPagamento(e, "Cartão de Débito")}
              >
                <span>
                  <Bank size={32} className="icon" />
                </span>
                Cartão de débito
              </button>
              <button onClick={(e) => handleClickPagamento(e, "Dinheiro")}>
                <span>
                  <Money size={32} className="icon" />
                </span>
                Dinheiro
              </button>
            </div>
          </div>
        </form>
      </section>
    </FormContainer>
  );
}
