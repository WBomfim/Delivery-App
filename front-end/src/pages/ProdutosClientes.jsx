import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { requestProducts } from '../services/requests';

export default function ProdutosClientes() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await requestProducts());
    };
    getProducts();
  }, []);

  return (
    <section>
      {console.log(products)}
      <Header />
    </section>
  );
}
