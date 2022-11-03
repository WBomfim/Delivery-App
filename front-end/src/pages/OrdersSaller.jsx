import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SaleCard from '../components/SaleCard';
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

  if (!sales.length) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <section>
        {sales.map((sale) => (
          <SaleCard key={ sale.id } sale={ sale } />
        ))}
      </section>
    </>
  );
}
