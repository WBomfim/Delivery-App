import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';
import Header from '../components/Header';
import CheckoutFinish from '../components/CheckoutFinish';
import CheckoutProductsTable from '../components/CheckoutProductsTable';

export default function Checkout() {
  const { totalValue } = useContext(DeliveryContext);
  return (
    <>
      <Header />
      <main>
        <CheckoutProductsTable />
        <p data-testid="customer_checkout__element-order-total-price">
          {`Total: R$ ${(totalValue.toFixed(2).toString().replace('.', ','))}`}
        </p>
        <CheckoutFinish />
      </main>
    </>
  );
}
