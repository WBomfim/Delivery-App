import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DetalhePedido from './pages/DetalhePedido';
import Login from './pages/Login';
import MeusPedidos from './pages/MeusPedisos';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/meus-pedidos" element={ <MeusPedidos /> } />
      <Route path="/detalhe-pedido/:id" element={ <DetalhePedido /> } />
    </Routes>
  );
}

export default App;
