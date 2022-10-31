import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import DetalhePedido from './pages/DetalhePedido';
import Login from './pages/Login';
import MeusPedidos from './pages/MeusPedisos';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/customer/orders" element={ <MeusPedidos /> } />
      <Route path="/customer/orders/:id" element={ <DetalhePedido /> } />
    </Routes>
  );
}

export default App;
