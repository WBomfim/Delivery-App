import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestData, setToken } from '../services/requests';
import { logout } from '../services/handleStorage';
import Header from '../components/Header';
import CustomerOrderCard from '../components/CustomerOrderCard';

export default function CustomerOrders() {
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSales = async () => {
      try {
        setToken();
        const data = await requestData('/sales/customer');
        setSales(data);
      } catch (error) {
        logout();
        navigate('/');
      }
    };
    getSales();
  }, [navigate]);

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
