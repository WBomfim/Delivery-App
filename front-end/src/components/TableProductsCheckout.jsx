import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';

export default function TableProductsCheckout() {
  const { productsCarShop, removeProductFromCart } = useContext(DeliveryContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descricao</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {
          productsCarShop.map((
            { productId, nameProduct, unitPrice, quantity, totalPrice },
            index,
          ) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
                { nameProduct }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                { quantity }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { `R$ ${unitPrice.toFixed(2).replace('.', ',')}` }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                { `R$ ${totalPrice.toFixed(2).replace('.', ',')}` }
              </td>
              <td>
                <button
                  type="button"
                  onClick={ () => removeProductFromCart(productId) }
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
