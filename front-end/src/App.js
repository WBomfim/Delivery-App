import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import DetalhePedido from './pages/DetalhePedido';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import MeusPedidos from './pages/MeusPedisos';
import ProdutosClientes from './pages/ProdutosClientes';
import DeliveryProvider from './context/DeliveryProvider';

function App() {
  return (
    <DeliveryProvider>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Cadastro /> } />
        <Route path="/customer/orders" element={ <MeusPedidos /> } />
        <Route path="/customer/orders/:id" element={ <DetalhePedido /> } />
        <Route path="/customer/products" element={ <ProdutosClientes /> } />
      </Routes>
    </DeliveryProvider>
  );
}

export default App;
