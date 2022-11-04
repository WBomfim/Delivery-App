import React, { useContext } from 'react';
// import Header from '../components/Header';
import DeliveryContext from '../context/DeliveryContext';
import CheckoutItem from '../components/CheckoutItem';
import CardProduct from '../components/CardProduct';

function Checkout() {
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Skol_lata_250ml',
  //     price: '2.20',
  //     quantity: 2,
  //   },
  // ];

  const { productsCarShop, totalValue } = useContext(DeliveryContext);
  return (
    <main>
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

          {productsCarShop.map((product, index) => (<CheckoutItem
            key={ product.id }
            product={ product }
            index={ index }
          />))}
        </tbody>

      </table>
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total: ${(totalValue)}`}

      </p>
      <CardProduct />
    </main>
  );
}

export default Checkout;
