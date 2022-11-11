import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/handleStorage';
import DeliveryContext from '../context/DeliveryContext';
import { requestData, setToken, requestRegister } from '../services/requests';
import dataTestId from '../utils/dataTestIds';

export default function CheckoutFinish() {
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [numberAddress, setNumberAddress] = useState('');
  const [sellers, setSellers] = useState([]);
  const { productsCarShop, totalValue } = useContext(DeliveryContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getSallers = async () => {
      try {
        setToken();
        const response = await requestData('/users/sellers');
        setSellers(response);
      } catch (error) {
        logout();
        navigate('/');
      }
    };
    getSallers();
  }, [navigate]);

  const finishSale = async () => {
    const saleData = {
      sellerId: seller,
      totalPrice: totalValue,
      deliveryAddress: address,
      deliveryNumber: numberAddress,
      products: productsCarShop,
    };

    try {
      setToken();
      const { id } = await requestRegister('/sales', saleData);
      navigate(`/customer/orders/${id}`);
    } catch (error) {
      logout();
      navigate('/');
    }
  };

  return (
    <section>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        <label htmlFor="saller">
          P. Vendedor Responsável:
          <select
            id="saller"
            value={ seller }
            onChange={ ({ target: { value } }) => setSeller(value) }
            data-testid={ dataTestId[29] }
          >
            <option value="">Selecione um Vendedor</option>
            {
              sellers.map((currSaller) => (
                <option key={ currSaller.id } value={ currSaller.id }>
                  {currSaller.name}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="address">
          Endereço de Entrega:
          <input
            type="text"
            id="address"
            value={ address }
            onChange={ ({ target: { value } }) => setAddress(value) }
            data-testid={ dataTestId[30] }
          />
        </label>
        <label htmlFor="number">
          Número:
          <input
            type="text"
            id="number"
            value={ numberAddress }
            onChange={ ({ target: { value } }) => setNumberAddress(value) }
            data-testid={ dataTestId[31] }
          />
        </label>
      </form>
      <button
        type="button"
        onClick={ finishSale }
        data-testid={ dataTestId[32] }
      >
        Finalizar Pedido
      </button>
    </section>
  );
}
