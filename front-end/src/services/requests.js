import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestLogin = async (rota, body) => {
  const { data } = await api.post(rota, body);
  return data;
};

export const requestRegister = async (rota, body) => {
  const { data } = await api.post(rota, body);
  return data;
};

export const requestProducts = async () => {
  const rota = 'http://localhost:3001/products';
  const { data } = await api.get(rota);
  return data;
};

export const getData = async (rota) => {
  const { data } = await api.get(rota);
  return data;
};

export const requestDetails = async (rota, id) => {
  const url = `${rota}/${id}`;
  const { data } = await api.get(url);
  return data;
};

export default api;
