import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';
import Header from '../components/Header';
import CheckoutFinish from '../components/CheckoutFinish';
import CheckoutProductsTable from '../components/CheckoutProductsTable';
import dataTestId from '../utils/dataTestIds';

export default function Checkout() {
  const { totalValue } = useContext(DeliveryContext);
  return (
    <>
      <Header />
      <main>
        <CheckoutProductsTable />
        <p data-testid={ dataTestId[28] }>
          {`Total: R$ ${(totalValue.toFixed(2).toString().replace('.', ','))}`}
        </p>
        <CheckoutFinish />
      </main>
    </>
  );
}
