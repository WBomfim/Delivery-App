import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeliveryContext from '../context/DeliveryContext';
import { getData, setToken, requestRegister } from '../services/requests';

export default function CheckoutFinish() {
  const [saller, setSaller] = useState();
  const [address, setAddress] = useState();
  const [numberAddress, setNumberAddress] = useState();
  const [sallers, setSallers] = useState([]);
  const { productsCarShop, totalValue } = useContext(DeliveryContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getSallers = async () => {
      const response = await getData('/users/sallers');
      setSallers(response);
    };
    getSallers();
  }, []);

  const finishSale = async () => {
    const saleData = {
      sallerId: saller,
      totalPrice: totalValue,
      deliveryAddress: address,
      deliveryNumber: numberAddress,
      products: productsCarShop,
    };

    const { token } = JSON.parse(localStorage.getItem('user'));
    setToken(token);

    const { id } = await requestRegister('/sales', saleData);
    navigate(`/customer/orders/${id}`);
  };

  return (
    <section>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        <label htmlFor="saller">
          P. Vendedor Responsável:
          <select
            id="saller"
            value={ saller }
            onChange={ ({ target: { value } }) => setSaller(value) }
            data-testid="customer_checkout__select-seller"
          >
            <option value="">Selecione um Vendedor</option>
            {sallers.map((currSaller) => (
              <option key={ currSaller.id } value={ currSaller.id }>
                {currSaller.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="address">
          Endereço de Entrega:
          <input
            type="text"
            id="address"
            value={ address }
            onChange={ ({ target: { value } }) => setAddress(value) }
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="number">
          Número:
          <input
            type="text"
            id="number"
            value={ numberAddress }
            onChange={ ({ target: { value } }) => setNumberAddress(value) }
            data-testid="customer_checkout__input-address-number"
          />
        </label>
      </form>
      <button
        type="button"
        onClick={ finishSale }
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido
      </button>
    </section>
  );
}
