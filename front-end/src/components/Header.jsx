import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getLogin, logout } from '../services/handleStorage';
import dataTestId from '../utils/dataTestIds';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [nameUser, setNameUser] = useState('');
  const userType = location.pathname.split('/')[1];

  useEffect(() => {
    const getUserName = async () => {
      const { name } = getLogin();
      setNameUser(name || 'Ciclano da Silva');
    };
    getUserName();
  }, []);

  const logoutBtn = () => {
    logout();
    return navigate('/');
  };

  const redirectProdutos = () => navigate('/customer/products');

  const redirectMeusPedidos = () => navigate(
    userType === 'seller' ? '/seller/orders' : '/customer/orders',
  );

  return (
    <header>
      {
        userType === 'customer' && (
          <button
            type="button"
            onClick={ redirectProdutos }
            data-testid={ dataTestId[11] }
          >
            PRODUTOS
          </button>
        )
      }
      <button
        type="button"
        onClick={ redirectMeusPedidos }
        data-testid={ dataTestId[12] }
      >
        { userType === 'seller' ? 'PEDIDOS' : 'MEUS PEDIDOS' }
      </button>
      <div>
        <p data-testid={ dataTestId[13] }>
          { nameUser }
        </p>
        <button
          type="button"
          onClick={ logoutBtn }
          data-testid={ dataTestId[14] }
        >
          Sair
        </button>
      </div>
    </header>
  );
}
