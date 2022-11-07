import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from '../context/DeliveryContext';

function UserCheckoutItem({
  index, productId, nameProduct, unitPrice, quantity, totalPrice,
}) {
  const { removeProductFromCart } = useContext(DeliveryContext);
  return (
    <tr>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        { index + 1 }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        { nameProduct }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        { quantity }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        { unitPrice }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        { totalPrice }
      </td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          onClick={ () => removeProductFromCart(productId) }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

UserCheckoutItem.propTypes = {
  productId: PropTypes.number,
  nameProduct: PropTypes.string,
  quantity: PropTypes.string,
  unitPrice: PropTypes.number,
  totalPrice: PropTypes.number,
}.isRequired;

export default UserCheckoutItem;
