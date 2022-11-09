export const saveLogin = (data) => {
  localStorage.setItem('User_Trybeer', JSON.stringify(data));
};

export const getLogin = () => JSON.parse(localStorage.getItem('User_Trybeer'));

export const logout = () => localStorage.removeItem('User_Trybeer');

export const getToken = () => {
  const { token } = getLogin();
  return token;
};
