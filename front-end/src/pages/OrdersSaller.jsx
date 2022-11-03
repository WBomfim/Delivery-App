import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardSale from '../components/CardSale';
import { getData } from '../services/requests';

export default function OrdersSaller() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      const data = await getData('/sales');
      setSales(data);
    };
    getSales();
  }, []);

  return (
    <>
      <Header />
      <section>
        {sales.map((sale) => (
          <CardSale key={ sale.id } sale={ sale } />
        ))}
      </section>
    </>
  );
}
