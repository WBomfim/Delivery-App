import React from 'react';
import PropTypes from 'prop-types';

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
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              { id }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              { name }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              { quantity }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-unit-price-${index}`
              }
            >
              { `R$ ${price.replace('.', ',')}` }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
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
