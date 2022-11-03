import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../services/requests';
import Header from '../components/Header';
import SaleTable from '../components/SaleTable';

export default function OrderDetails() {
  const [sale, setSale] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getSale = async () => {
      const response = await getData(`/sales/${id}`);
      setSale(response);
    };
    getSale();
  }, [id]);

  if (!sale) return <p>Loading...</p>;

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
              { `PEDIDO ${sale.id}` }
            </p>
            <p
              data-testid="seller_order_details__element-order-details-label-order-date"
            >
              { new Date(sale.sale_date).toLocaleDateString('pt-BR') }
            </p>
            <p
              data-testid="seller_order_details__element-order-details-label-order-status"
            >
              { sale.status }
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
        <SaleTable products={ sale.products } />
        <div>
          <p
            data-testid="seller_order_details__element-order-total-price"
          >
            { `Total: R$ ${sale.total_price}` }
          </p>
        </div>
      </section>
    </>
  );
}
