import React from 'react';
import PropTypes from 'prop-types';

export default function SaleTable({ products }) {
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
            <td
              data-testid={
                `seller_order_details__element-order-table-item-number-${index}`
              }
            >
              { id }
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-name-${index}`
              }
            >
              { name }
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-quantity-${index}`
              }
            >
              { quantity }
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-unit-price-${index}`
              }
            >
              { price }
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-sub-total-${index}`
              }
            >
              { (price * quantity).toFixed(2) }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

SaleTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};