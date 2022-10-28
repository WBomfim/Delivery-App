import React, { useState, useEffect } from 'react';
import CardMeuPedidos from '../components/CardMeuPedido';
import Header from '../components/Header';

export default function MeusPedidos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos([
      {
        id: 1,
        status: 'PENDENTE',
        data: '28/04/21',
        price: 23.80,
      },
      {
        id: 2,
        status: 'Preparado',
        data: '08/04/21',
        price: 14.20,
      },
    ]);
  }, [setProdutos]);

  return (
    <section>
      <Header />
      {
        produtos.map(({ id, status, data, price }) => (
          <CardMeuPedidos
            key={ id }
            cardId={ id }
            id={ id }
            status={ status }
            data={ data }
            price={ price }
          />
        ))
      }
    </section>
  );
}
