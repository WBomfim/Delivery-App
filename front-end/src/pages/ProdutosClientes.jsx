import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { requestProducts } from '../services/requests';
import CardProducts from '../components/CardProduct';

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
      <Header />
      { products.map((ev, i) => (
        <CardProducts
          key={ i }
          id={ ev.id }
          name={ ev.name }
          price={ ev.price }
          urlImage={ ev.url_image }
        />
      )) }
    </section>
  );
}
