import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SellerOrderCard from '../components/SellerOrderCard';
import { logout } from '../services/handleStorage';
import { requestData, setToken } from '../services/requests';

export default function SellerOrders() {
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSales = async () => {
      try {
        setToken();
        const data = await requestData('/sales/seller');
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
