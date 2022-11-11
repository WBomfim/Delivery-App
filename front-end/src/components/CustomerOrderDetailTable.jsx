import React from 'react';
import PropTypes from 'prop-types';
import dataTestId from '../utils/dataTestIds';

export default function CustomerOrderDetailTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>

      <tbody>
        { products.map(({ id, name, quantity, price }, index) => (
          <tr key={ name }>
            <td data-testid={ dataTestId[41](index) }>
              { id }
            </td>
            <td data-testid={ dataTestId[42](index) }>
              { name }
            </td>
            <td data-testid={ dataTestId[43](index) }>
              { quantity }
            </td>
            <td data-testid={ dataTestId[44](index) }>
              { `R$ ${price.replace('.', ',')}` }
            </td>
            <td data-testid={ dataTestId[45](index) }>
              { `R$ ${(price * quantity).toFixed(2).replace('.', ',')}` }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

CustomerOrderDetailTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.string,
  })).isRequired,
};
