import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { requestDetails, requestUpdate, setToken } from '../services/requests';
import { logout } from '../services/handleStorage';
import Header from '../components/Header';
import SellerOrderDetailTable from '../components/SellerOrderDetailTable';

export default function OrderDetails() {
  const [sale, setSale] = useState();
  const { id: paramsId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSale = async () => {
      try {
        setToken();
        const response = await requestDetails('/sales', paramsId);
        setSale(response);
      } catch (error) {
        logout();
        navigate('/');
      }
    };
    getSale();
  }, [paramsId, navigate]);

  const prepareSale = async () => {
    setToken();
    const updatedSale = await requestUpdate('/sales', paramsId, { status: 'Preparando' });
    setSale(updatedSale);
  };

  const sendSale = async () => {
    setToken();
    const updatedSale = await requestUpdate('/sales', paramsId, {
      status: 'Em Trânsito',
    });
    setSale(updatedSale);
  };

  if (!sale) return <p>Loading...</p>;

  const { id, saleDate, status, products, totalPrice } = sale;

  return (
    <>
      <Header />
      <main>
        <h1>Detalhes de Pedido</h1>
        <div>
          <div>
            <p
              data-testid="seller_order_details__element-order-details-label-order-id"
            >
              {
                `PEDIDO ${id.toLocaleString('en-US', {
                  minimumIntegerDigits: 4,
                  useGrouping: false,
                })}`
              }
            </p>
            <p
              data-testid="seller_order_details__element-order-details-label-order-date"
            >
              { saleDate }
            </p>
            <p
              data-testid={
                `seller_order_details__element-order-details-label-delivery-status-${id}`
              }
            >
              { status }
            </p>
          </div>
          <div>
            <button
              type="button"
              disabled={ status !== 'Pendente' }
              onClick={ prepareSale }
              data-testid="seller_order_details__button-preparing-check"
            >
              PREPARAR PEDIDO
            </button>
            <button
              type="button"
              disabled={ status !== 'Preparando' }
              onClick={ sendSale }
              data-testid="seller_order_details__button-dispatch-check"
            >
              SAIU PARA ENTREGA
            </button>
          </div>
        </div>
        <SellerOrderDetailTable products={ products } />
        <div>
          <p
            data-testid="seller_order_details__element-order-total-price"
          >
            { `Total: R$ ${totalPrice.toString().replace('.', ',')}` }
          </p>
        </div>
      </main>
    </>
  );
}
