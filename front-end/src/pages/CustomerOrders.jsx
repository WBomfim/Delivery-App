import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestData, setToken } from '../services/requests';
import { logout } from '../services/handleStorage';
import Header from '../components/Header';
import CustomerOrderCard from '../components/CustomerOrderCard';

export default function CustomerOrders() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getSales = async () => {
      try {
        setLoading(true);
        setToken();
        const data = await requestData('/sales/customer');
        setSales(data);
        setLoading(false);
      } catch (error) {
        logout();
        navigate('/');
      }
    };
    getSales();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <main>
        {
          sales.map(({ id, status, saleDate, totalPrice }) => (
            <CustomerOrderCard
              key={ id }
              id={ id }
              status={ status }
              data={ saleDate }
              price={ totalPrice }
            />
          ))
        }
      </main>
    </>
  );
}
