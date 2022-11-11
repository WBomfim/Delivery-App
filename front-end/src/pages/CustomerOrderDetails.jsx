import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CustomerOrderDatailTable from '../components/CustomerOrderDatailTable';
import { logout } from '../services/handleStorage';
import { requestDetails, requestUpdate, setToken } from '../services/requests';

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
            <p
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              { `PEDIDO ${id}` }
            </p>
            <p
              data-testid="customer_order_details__element-order-details-label-seller-name"
            >
              {`P. Vend: ${sellerName}`}
            </p>
            <p
              data-testid="customer_order_details__element-order-details-label-order-date"
            >
              { saleDate }
            </p>
            <p
              data-testid={
                `customer_order_details__element-order-details-label-delivery-status-${id}`
              }
            >
              { status }
            </p>
            <button
              type="button"
              disabled={ status !== 'Em Trânsito' }
              onClick={ deliveredSale }
              data-testid="customer_order_details__button-delivery-check"
            >
              MARCAR COMO ENTREGUE
            </button>
          </div>
          <CustomerOrderDatailTable products={ products } />
          <div>
            <span>TOTAL: R$ </span>
            <span
              data-testid="customer_order_details__element-order-total-price"
            >
              { totalPrice.toString().replace('.', ',') }
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
