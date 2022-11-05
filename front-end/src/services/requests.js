import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

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

export const requestDetails = async (id) => {
  const url = `http://localhost:3001/sales/${id}`;
  const { data } = await api.get(url);
  // console.log(data);
  return data;
};

export default api;

// export const requestDetails = async (id) => {
//   const url = `http://localhost:3001/sales/`;
//   const { data } = await api.get(url);
//   console.log(data);
//   return data;
// };
