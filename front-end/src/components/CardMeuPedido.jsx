import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CardMeuPedidos({ cardId, id, status, data, price }) {
  return (
    <Link to={ `/customer/orders/${id}` }>
      <div data-testids={ `customer_orders__element-order-id-${cardId}` }>
        <p>Pedido</p>
        { id }
      </div>
      <h2 data-testids={ `customer_orders__element-delivery-status-${cardId}` }>
        { status }
      </h2>
      <h4 data-testids={ `customer_orders__element-order-date-${cardId}` }>
        { data }
      </h4>
      <h4 data-testids={ `customer_orders__element-card-price-${cardId}` }>
        { `R$ ${price}` }
      </h4>
    </Link>
  );
}

CardMeuPedidos.propTypes = {
  cardId: PropTypes.number,
  id: PropTypes.number,
  status: PropTypes.string,
  data: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
