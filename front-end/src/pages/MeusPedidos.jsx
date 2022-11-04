import React, { useState, useEffect } from 'react';
import CardMeuPedidos from '../components/CardMeuPedido';
import Header from '../components/Header';
import { getData } from '../services/requests';

export default function MeusPedidos() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      setSales(await getData('http://localhost:3001/sales'));
    };
    getSales();
  }, []);

  return (
    <section>
      <Header />
      {
        sales.map(({ id, status, saleDate, totalPrice }) => (
          <CardMeuPedidos
            key={ id }
            id={ id }
            status={ status }
            data={ saleDate }
            price={ totalPrice }
          />
        ))
      }
    </section>
  );
}
