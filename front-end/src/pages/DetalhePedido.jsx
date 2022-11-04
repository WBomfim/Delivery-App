import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Table from '../components/Table';
import { requestDetails } from '../services/requests';

export default function DetalhePedido() {
  const [ind] = useState();
  const [details, setDetails] = useState();
  const location = useLocation();

  useEffect(() => {
    const getDetails = async () => {
      const id = location.pathname.split('/');
      const request = await requestDetails(id[3]);
      setDetails(request);
    };
    getDetails();
  }, []);

  // console.log(details);
  return (
    <section>
      <Header />
      <h2>Detalhe do Pedido</h2>
      <div>
        <div>
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            PEDIDO 0003;
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P.Vend: Fulan Pereira
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            07/04/2021
          </p>
          <p
            data-testid={
              `customer_order_details__element-order-details-label-delivery-status${ind}`
            }
          >
            ENTREGUE
          </p>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
        <Table />
        <h2
          data-testid="customer_order_details__element-order-total-price"
        >
          Total: R$ 28,46
        </h2>
      </div>
    </section>
  );
}
