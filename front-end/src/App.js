import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import Registration from './pages/Registration';
import Login from './pages/Login';
import CustomerOrders from './pages/CustomerOrders';
import CustomerProducts from './pages/CustomerProducts';
import DeliveryProvider from './context/DeliveryProvider';
import SellerOrderDetails from './pages/SellerOrderDetails';
import SellerOrders from './pages/SellerOrders';
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <DeliveryProvider>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Registration /> } />
        <Route path="/customer/products" element={ <CustomerProducts /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/customer/orders" element={ <CustomerOrders /> } />
        <Route path="/customer/orders/:id" element={ <CustomerOrderDetails /> } />
        <Route path="/seller/orders" element={ <SellerOrders /> } />
        <Route path="/seller/orders/:id" element={ <SellerOrderDetails /> } />
      </Routes>
    </DeliveryProvider>
  );
}
