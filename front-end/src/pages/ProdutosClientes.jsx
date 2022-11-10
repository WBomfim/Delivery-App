import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken, requestData } from '../services/requests';
import Header from '../components/Header';
import CardProducts from '../components/CardProduct';
import DeliveryContext from '../context/DeliveryContext';
import { logout } from '../services/handleStorage';

export default function ProdutosClientes() {
  const [products, setProducts] = useState([]);
  const { totalValue } = useContext(DeliveryContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        setToken();
        const response = await requestData('/products');
        setProducts(response);
      } catch (error) {
        logout();
        navigate('/');
      }
    };
    getProducts();
  }, [navigate]);

  return (
    <section>
      <Header />
      { products.map((ev, i) => (
        <CardProducts
          key={ i }
          id={ ev.id }
          name={ ev.name }
          price={ Number(ev.price) }
          urlImage={ ev.urlImage }
        />
      )) }

      <button
        disabled={ totalValue === 0 }
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
