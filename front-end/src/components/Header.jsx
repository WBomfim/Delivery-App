import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [nameUser, setNameUser] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      setNameUser('Ciclano da Silva');
    } else {
      setNameUser(user.name);
    }
  }, []);

  const logoutBtn = () => {
    localStorage.clear();
    navigate('/');
  };

  const redirectProdutos = () => navigate('/customer/products');

  const redirectMeusPedidos = () => navigate('/customer/orders');

  return (
    <section>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ redirectProdutos }
      >
        PRODUTOS
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ redirectMeusPedidos }
      >
        MEUS PEDIDOS
      </button>
      <p
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { nameUser }
      </p>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logoutBtn }
      >
        Sair
      </button>
    </section>
  );
}
