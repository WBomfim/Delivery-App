import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { requestDetails, requestUpdate, setToken } from '../services/requests';
import { logout } from '../services/handleStorage';
import Header from '../components/Header';
import CustomerOrderDetailTable from '../components/CustomerOrderDetailTable';
import dataTestId from '../utils/dataTestIds';

export default function CustomerOrderDetails() {
  const [details, setDetails] = useState();
  const { id: paramsId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getDetails = async () => {
      try {
        setToken();
        const request = await requestDetails('/sales', paramsId);
        setDetails(request);
      } catch (error) {
        logout();
        navigate('/');
      }
    };
    getDetails();
  }, [paramsId, navigate]);

  const deliveredSale = async () => {
    try {
      setToken();
      const updatedSale = await requestUpdate('/sales', paramsId, { status: 'Entregue' });
      setDetails(updatedSale);
    } catch (error) {
      logout();
      navigate('/');
    }
  };

  if (!details) return <p>Loading...</p>;

  const {
    id,
    sellerName,
    saleDate,
    totalPrice,
    status,
    products,
  } = details;

  return (
    <>
      <Header />
      <main>
        <h2>Detalhe do Pedido</h2>
        <section>
          <div>
            <p data-testid={ dataTestId[37] }>
              {
                `PEDIDO ${id.toLocaleString('en-US', {
                  minimumIntegerDigits: 4,
                  useGrouping: false,
                })}`
              }
            </p>
            <p data-testid={ dataTestId[38] }>
              {`P. Vend: ${sellerName}`}
            </p>
            <p data-testid={ dataTestId[39] }>
              { saleDate }
            </p>
            <p data-testid={ dataTestId[40] }>
              { status }
            </p>
            <button
              type="button"
              disabled={ status !== 'Em Trânsito' }
              onClick={ deliveredSale }
              data-testid={ dataTestId[47] }
            >
              MARCAR COMO ENTREGUE
            </button>
          </div>
          <CustomerOrderDetailTable products={ products } />
          <div>
            <p data-testid={ dataTestId[46] }>
              { `TOTAL: R$ ${totalPrice.toString().replace('.', ',')}` }
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
