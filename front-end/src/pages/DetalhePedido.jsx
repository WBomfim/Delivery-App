import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import OrderDatailTable from '../components/OrderDatailTable';
import { requestDetails } from '../services/requests';

export default function DetalhePedido() {
  const [details, setDetails] = useState();
  const { id: paramsId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const request = await requestDetails('/sales', paramsId);
      setDetails(request);
    };
    getDetails();
  }, [paramsId]);

  if (!details) return <p>Loading...</p>;

  const {
    id,
    seller,
    saleDate,
    totalPrice,
    status,
    products,
  } = details;

  return (
    <section>
      <Header />
      <h2>Detalhe do Pedido</h2>
      <div>
        <div>
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {`PEDIDO ${id}`}
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`P. Vend: ${seller.name}`}
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { saleDate }
          </p>
          <p
            data-testid={
              `customer_order_details__element-order-details-label-delivery-status${id}`
            }
          >
            { status }
          </p>
          <button
            type="button"
            disabled={ status !== 'Entregue' }
            data-testid="customer_order_details__button-delivery-check"
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
        <OrderDatailTable products={ products } />
        <div>
          <span>TOTAL: R$ </span>
          <span
            data-testid="customer_order_details__element-order-total-price"
          >
            { totalPrice.toString().replace('.', ',') }
          </span>
        </div>
      </div>
    </section>
  );
}
