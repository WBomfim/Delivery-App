import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();
  const location = pathname.split('/')[1];
  const { name } = JSON.parse(localStorage.getItem('userTrybeer'));

  return (
    <section>
      {
        location !== 'seller' ? (
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </button>
        ) : null
      }

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        { location === 'seller' ? 'PEDIDOS' : 'MEUS PEDIDOS' }
      </button>

      <div>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
        </p>
      </div>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </section>
  );
}
