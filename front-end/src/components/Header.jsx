import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getLogin, logout } from '../services/handleStorage';

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
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </button>
        )
      }
      <button
        type="button"
        onClick={ redirectMeusPedidos }
        data-testid="customer_products__element-navbar-link-orders"
      >
        { userType === 'seller' ? 'PEDIDOS' : 'MEUS PEDIDOS' }
      </button>
      <div>
        <p data-testid="customer_products__element-navbar-user-full-name">
          { nameUser }
        </p>
        <button
          type="button"
          onClick={ logoutBtn }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </div>
    </header>
  );
}
