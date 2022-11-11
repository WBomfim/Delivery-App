import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestData, setToken } from '../services/requests';
import { logout } from '../services/handleStorage';
import Header from '../components/Header';
import SellerOrderCard from '../components/SellerOrderCard';

export default function SellerOrders() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getSales = async () => {
      try {
        setLoading(true);
        setToken();
        const data = await requestData('/sales/seller');
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
          sales.map((
            { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber },
          ) => (
            <SellerOrderCard
              key={ id }
              id={ id }
              status={ status }
              date={ saleDate }
              price={ totalPrice }
              address={ deliveryAddress }
              addressNumber={ deliveryNumber }
            />
          ))
        }
      </main>
    </>
  );
}
