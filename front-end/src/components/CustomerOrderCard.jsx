import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import dataTestId from '../utils/dataTestIds';

export default function CustomerOrderCard({ id, status, data, price }) {
  const navigate = useNavigate();

  return (
    <div onClick={ () => navigate(`/customer/orders/${id}`) } aria-hidden>
      <div data-testid={ dataTestId[33](id) }>
        <p>Pedido</p>
        { id.toLocaleString('en-US', { minimumIntegerDigits: 4, useGrouping: false }) }
      </div>
      <p data-testid={ dataTestId[34](id) }>
        { status }
      </p>
      <p data-testid={ dataTestId[35](id) }>
        { data }
      </p>
      <p data-testid={ dataTestId[36](id) }>
        { `R$ ${price.toString().replace('.', ',')}` }
      </p>
    </div>
  );
}

CustomerOrderCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  data: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
