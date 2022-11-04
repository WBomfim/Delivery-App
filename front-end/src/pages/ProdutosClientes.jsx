import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { requestProducts } from '../services/requests';
import CardProducts from '../components/CardProduct';
import DeliveryContext from '../context/DeliveryContext';

export default function ProdutosClientes() {
  const [products, setProducts] = useState([]);
  const [hblBtn, setHblBtn] = useState(true);
  const { totalValue } = useContext(DeliveryContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (totalValue > 0) {
      setHblBtn(false);
    }
  }, [totalValue]);

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
          urlImage={ ev.urlImage }
        />
      )) }

      <button
        disabled={ hblBtn }
        onClick={ () => navigate('/customer/checkout') }
        type="button"
        data-testid="customer_products__button-cart"
      >
        <button
          type="button"
          onClick={ () => navigate('/customer/checkout') }
          data-testid="customer_products__checkout-bottom-value"
        >
          { totalValue.toFixed(2).toString().replace('.', ',') }
        </button>
      </button>
    </section>
  );
}
