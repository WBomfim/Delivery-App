import React from 'react';

export default function Header() {
  return (
    <section>
      <button
        type="button"
        data-testids="customer_products__element-navbar-link-products"
      >
        PRODUTOS
      </button>
      <button
        type="button"
        data-testids="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </button>
      <p
        data-testids="customer_products__element-navbar-user-full-name"
      >
        Ciclano da Silva
      </p>
      <button
        type="button"
        data-testids="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </section>
  );
}
