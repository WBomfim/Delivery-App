import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import dataTestId from '../utils/dataTestIds';

export default function SellerOrderCard(
  { id, status, date, price, address, addressNumber },
) {
  const navigate = useNavigate();

  return (
    <div onClick={ () => navigate(`/seller/orders/${id}`) } aria-hidden>
      <div data-testid={ dataTestId[48](id) }>
        <p>Pedido</p>
        { id.toLocaleString('en-US', { minimumIntegerDigits: 4, useGrouping: false }) }
      </div>
      <div>
        <div>
          <div>
            <p data-testid={ dataTestId[49](id) }>
              { status }
            </p>
          </div>
          <div>
            <p data-testid={ dataTestId[50](id) }>
              { date }
            </p>
            <p data-testid={ dataTestId[51](id) }>
              { `R$ ${price.replace('.', ',')}` }
            </p>
          </div>
        </div>
        <div>
          <p data-testid={ dataTestId[52](id) }>
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
