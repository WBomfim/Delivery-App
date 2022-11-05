import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from '../context/DeliveryContext';

function UserCheckoutItem({
  index, idProduct, nameProduct, unitPrice, quanty, totalPrice }) {
  const { removeProductFromCart } = useContext(DeliveryContext);
  return (

    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { index + 1 }

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { nameProduct }

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        { quanty }

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        { unitPrice }

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        { totalPrice }

      </td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          onClick={ () => removeProductFromCart(idProduct) }
        >
          Remover

        </button>

      </td>
    </tr>

  );
}

UserCheckoutItem.propTypes = {
  idProduct: PropTypes.number,
  nameProduct: PropTypes.string,
  quanty: PropTypes.string,
  unitPrice: PropTypes.number,
  totalPrice: PropTypes.number,
}.isRequired;

export default UserCheckoutItem;
