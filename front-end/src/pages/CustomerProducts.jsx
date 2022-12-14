import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken, requestData } from '../services/requests';
import { logout } from '../services/handleStorage';
import DeliveryContext from '../context/DeliveryContext';
import Header from '../components/Header';
import CustomerProductCard from '../components/CustomerProductCard';
import dataTestId from '../utils/dataTestIds';

export default function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { totalValue } = useContext(DeliveryContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        setToken();
        const response = await requestData('/products');
        setProducts(response);
        setLoading(false);
      } catch (error) {
        logout();
        navigate('/');
      }
    };
    getProducts();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <main>
        {
          products.map((ev, i) => (
            <CustomerProductCard
              key={ i }
              id={ ev.id }
              name={ ev.name }
              price={ Number(ev.price) }
              urlImage={ ev.urlImage }
            />
          ))
        }

        <button
          type="button"
          disabled={ totalValue === 0 }
          onClick={ () => navigate('/customer/checkout') }
          data-testid={ dataTestId[75] }
        >
          <div data-testid={ dataTestId[21] }>
            { `Ver Carrinho: R$ ${totalValue.toFixed(2).toString().replace('.', ',')}` }
          </div>
        </button>
      </main>
    </>
  );
}
