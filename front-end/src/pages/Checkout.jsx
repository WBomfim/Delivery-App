import React, { useContext } from 'react';
import Header from '../components/Header';
import DeliveryContext from '../context/DeliveryContext';
import CheckoutItem from '../components/CheckoutItem';

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
      <Header />
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
            key={ index }
            index={ index }
            idProduct={ product.idProduct }
            nameProduct={ product.nameProduct }
            unitPrice={ Number(product.unitPrice)
              .toFixed(2).toString().replace('.', ',') }
            quanty={ product.quanty }
            totalPrice={ Number(product.totalPrice)
              .toFixed(2).toString().replace('.', ',') }
          />))}
        </tbody>

      </table>
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total: ${(totalValue.toFixed(2).toString().replace('.', ','))}`}

      </p>
    </main>
  );
}

export default Checkout;
