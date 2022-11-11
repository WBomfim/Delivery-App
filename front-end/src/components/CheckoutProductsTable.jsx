import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';
import dataTestId from '../utils/dataTestIds';

export default function CheckoutProductsTable() {
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
              <td data-testid={ dataTestId[22](index) }>
                { index + 1 }
              </td>
              <td data-testid={ dataTestId[23](index) }>
                { nameProduct }
              </td>
              <td data-testid={ dataTestId[24](index) }>
                { quantity }
              </td>
              <td data-testid={ dataTestId[25](index) }>
                { `R$ ${unitPrice.toFixed(2).replace('.', ',')}` }
              </td>
              <td data-testid={ dataTestId[26](index) }>
                { `R$ ${totalPrice.toFixed(2).replace('.', ',')}` }
              </td>
              <td>
                <button
                  type="button"
                  onClick={ () => removeProductFromCart(productId) }
                  data-testid={ dataTestId[27](index) }
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
