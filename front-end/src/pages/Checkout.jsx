import React, { useContext } from 'react';
import Header from '../components/Header';
import DeliveryContext from '../context/DeliveryContext';
import CheckoutFinish from '../components/CheckoutFinish';
import TableProductsCheckout from '../components/TableProductsCheckout';

export default function Checkout() {
  const { totalValue } = useContext(DeliveryContext);
  return (
    <>
      <Header />
      <main>
        <TableProductsCheckout />
        <p data-testid="customer_checkout__element-order-total-price">
          {`Total: ${(totalValue.toFixed(2).toString().replace('.', ','))}`}
        </p>
        <CheckoutFinish />
      </main>
    </>
  );
}
