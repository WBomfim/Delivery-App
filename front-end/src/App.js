import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import DetalhePedido from './pages/DetalhePedido';
import Login from './pages/Login';
import MeusPedidos from './pages/MeusPedisos';
import ProdutosClientes from './pages/ProdutosClientes';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/customer/orders" element={ <MeusPedidos /> } />
      <Route path="/customer/orders/:id" element={ <DetalhePedido /> } />
      <Route path="/customer/products" element={ <ProdutosClientes /> } />
    </Routes>
  );
}

export default App;
