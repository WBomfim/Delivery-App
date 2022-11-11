import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CardCustomerOrder({ id, status, data, price }) {
  const navigate = useNavigate();

  return (
    <div onClick={ () => navigate(`/customer/orders/${id}`) } aria-hidden>
      <div data-testid={ `customer_orders__element-order-id-${id}` }>
        <p>Pedido</p>
        { id }
      </div>
      <h2 data-testid={ `customer_orders__element-delivery-status-${id}` }>
        { status }
      </h2>
      <p data-testid={ `customer_orders__element-order-date-${id}` }>
        { data }
      </p>
      <p data-testid={ `customer_orders__element-card-price-${id}` }>
        { price.toString().replace('.', ',') }
      </p>
    </div>
  );
}

CardCustomerOrder.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  data: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
