import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CardSale({ sale }) {
  const {
    id,
    total_price: totalPrice,
    delivery_address: deliveryAddress,
    delivery_number: deliveryNumber,
    sale_date: saleDate,
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
        <p data-testid={ `seller_orders__element-order-id-${id}` }>{id}</p>
      </div>
      <div>
        <div>
          <div>
            <p data-testid={ `seller_orders__element-delivery-status-${id}` }>{status}</p>
          </div>
          <div>
            <p data-testid={ `seller_orders__element-order-date-${id}` }>
              {new Date(saleDate).toLocaleDateString('pt-BR')}
            </p>
            <p data-testid={ `seller_orders__element-card-price-${id}` }>
              {`R$ ${totalPrice}`}
            </p>
          </div>
        </div>
        <div>
          <p data-testid={ `seller_orders__element-card-address-${id}` }>
            {`${deliveryAddress}, ${deliveryNumber}`}
          </p>
        </div>
      </div>
    </button>
  );
}

CardSale.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    total_price: PropTypes.string.isRequired,
    delivery_address: PropTypes.string.isRequired,
    delivery_number: PropTypes.string.isRequired,
    sale_date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
