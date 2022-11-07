import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function SaleCard({ sale }) {
  const {
    id,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status,
  } = sale;

  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={ () => navigate(`/seller/orders/${id}`) }
    >
      <div>
        <p>Pedido</p>
        <p data-testid={ `seller_orders__element-order-id-${id}` }>{ id }</p>
      </div>
      <div>
        <div>
          <div>
            <h2 data-testid={ `seller_orders__element-delivery-status-${id}` }>
              { status }
            </h2>
          </div>
          <div>
            <p data-testid={ `seller_orders__element-order-date-${id}` }>
              { saleDate }
            </p>
            <p data-testid={ `seller_orders__element-card-price-${id}` }>
              { `R$ ${totalPrice.toString().replace('.', ',')}` }
            </p>
          </div>
        </div>
        <div>
          <p data-testid={ `seller_orders__element-card-address-${id}` }>
            { `${deliveryAddress}, ${deliveryNumber}` }
          </p>
        </div>
      </div>
    </button>
  );
}

SaleCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
