import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestLogin = async (rota, body) => {
  const { data } = await api.post(rota, body);
  return data;
};

export const requestProducts = async () => {
  const rota = 'http://localhost:3001/products';
  const { data } = await api.get(rota);
  return data;
};

export const requestRegister = async (rota, body) => {
  const { data } = await api.post(rota, body);
  return data;
};

export default api;
