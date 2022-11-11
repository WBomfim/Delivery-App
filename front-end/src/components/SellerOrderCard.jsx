import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function SellerOrderCard(
  { id, status, date, price, address, addressNumber },
) {
  const navigate = useNavigate();

  return (
    <div onClick={ () => navigate(`/seller/orders/${id}`) } aria-hidden>
      <div data-testid={ `seller_orders__element-order-id-${id}` }>
        <p>Pedido</p>
        { id.toLocaleString('en-US', { minimumIntegerDigits: 4, useGrouping: false }) }
      </div>
      <div>
        <div>
          <div>
            <p data-testid={ `seller_orders__element-delivery-status-${id}` }>
              { status }
            </p>
          </div>
          <div>
            <p data-testid={ `seller_orders__element-order-date-${id}` }>
              { date }
            </p>
            <p data-testid={ `seller_orders__element-card-price-${id}` }>
              { `R$ ${price.replace('.', ',')}` }
            </p>
          </div>
        </div>
        <div>
          <p data-testid={ `seller_orders__element-card-address-${id}` }>
            { `${address}, ${addressNumber}` }
          </p>
        </div>
      </div>
    </div>
  );
}

SellerOrderCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.number,
  address: PropTypes.string,
  addressNumber: PropTypes.number,
}.isRequired;
