import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../services/requests';
import Header from '../components/Header';
import SaleTable from '../components/SaleTable';

export default function OrderDetails() {
  const [sale, setSale] = useState();
  const { id: paramsId } = useParams();

  useEffect(() => {
    const getSale = async () => {
      const response = await getData(`/sales/${paramsId}`);
      setSale(response);
    };
    getSale();
  }, [paramsId]);

  if (!sale) return <p>Loading...</p>;

  const { id, saleDate, status, products, totalPrice } = sale;

  return (
    <>
      <Header />
      <section>
        <h1>Detalhes de Pedido</h1>
        <div>
          <div>
            <p
              data-testid="seller_order_details__element-order-details-label-order-id"
            >
              { `PEDIDO ${id}` }
            </p>
            <p
              data-testid="seller_order_details__element-order-details-label-order-date"
            >
              { saleDate }
            </p>
            <p
              data-testid="seller_order_details__element-order-details-label-order-status"
            >
              { status }
            </p>
          </div>
          <div>
            <p
              data-testid="seller_order_details__button-preparing-check"
            >
              PREPARAR PEDIDO
            </p>
            <p
              data-testid="seller_order_details__button-dispatch-check"
            >
              SAIU PARA ENTREGA
            </p>
          </div>
        </div>
        <SaleTable products={ products } />
        <div>
          <p
            data-testid="seller_order_details__element-order-total-price"
          >
            { `Total: R$ ${totalPrice}` }
          </p>
        </div>
      </section>
    </>
  );
}
