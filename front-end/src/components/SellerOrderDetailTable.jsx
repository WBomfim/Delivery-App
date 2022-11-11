import React from 'react';
import PropTypes from 'prop-types';
import dataTestId from '../utils/dataTestIds';

export default function SellerOrderDetailTable({ products }) {
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
        { products.map(({ name, quantity, price }, index) => (
          <tr key={ name }>
            <td data-testid={ dataTestId[58](index) }>
              { index + 1 }
            </td>
            <td data-testid={ dataTestId[59](index) }>
              { name }
            </td>
            <td data-testid={ dataTestId[60](index) }>
              { quantity }
            </td>
            <td data-testid={ dataTestId[61](index) }>
              { `R$ ${price.replace('.', ',')}` }
            </td>
            <td data-testid={ dataTestId[62](index) }>
              { `R$ ${(price * quantity).toFixed(2).replace('.', ',')}` }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

SellerOrderDetailTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};
