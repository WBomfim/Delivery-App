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
              // eslint-disable-next-line max-len
              data-testid="seller_order_details__element-order-details-label-delivery-status"
            >
              { status }
            </p>
          </div>
          <div>
            <button
              type="button"
              disabled={ status !== 'Pendente' }
              data-testid="seller_order_details__button-preparing-check"
            >
              PREPARAR PEDIDO
            </button>
            <button
              type="button"
              disabled={ status !== 'Preparando' }
              data-testid="seller_order_details__button-dispatch-check"
            >
              SAIU PARA ENTREGA
            </button>
          </div>
        </div>
        <SaleTable products={ products } />
        <div>
          <p
            data-testid="seller_order_details__element-order-total-price"
          >
            { totalPrice.toString().replace('.', ',') }
          </p>
        </div>
      </section>
    </>
  );
}
