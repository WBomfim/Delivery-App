import React, { useState } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';

export default function DetalhePedido() {
  const [ind] = useState();

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
