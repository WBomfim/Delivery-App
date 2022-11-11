import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestLogin } from '../services/requests';
import { saveLogin, getLogin } from '../services/handleStorage';
import dataTestId from '../utils/dataTestIds';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const verifyUserLoged = () => {
      const user = getLogin();
      if (!user) return;
      if (user.role === 'customer') return navigate('/customer/products');
      if (user.role === 'seller') return navigate('/seller/orders');
    };
    verifyUserLoged();
  }, [navigate]);

  useEffect(() => {
    const verifyLoginData = () => {
      const lengthVerification = 6;
      const errors = [
        !email || !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
        !password || password.length < lengthVerification,
      ];
      const hasErrors = errors.some((error) => error);
      setDisableButton(hasErrors);
    };
    verifyLoginData();
  }, [email, password]);

  const login = async (event) => {
    event.preventDefault();
    setFailedTryLogin(false);
    try {
      const response = await requestLogin('/login', { email, password });
      saveLogin(response);
      if (response.role === 'seller') {
        return navigate('/seller/orders');
      }
      if (response.role === 'customer') {
        return navigate('/customer/products');
      }
    } catch (error) {
      setFailedTryLogin(true);
    }
  };

  return (
    <main className="user-login-area">
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            className="login__login_input"
            type="text"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            placeholder="email@trybeer.com.br"
            data-testid={ dataTestId[1] }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            placeholder="*************"
            data-testid={ dataTestId[2] }
          />
        </label>
        <button
          type="submit"
          disabled={ disableButton }
          onClick={ (event) => login(event) }
          data-testid={ dataTestId[3] }
        >
          LOGIN
        </button>
        <button
          type="button"
          onClick={ () => navigate('/register') }
          data-testid={ dataTestId[4] }
        >
          Ainda não tenho conta
        </button>
      </form>
      <div>
        {
          failedTryLogin
            ? (
              <p data-testid={ dataTestId[5] }>
                {
                  `O endereço de e-mail ou a senha não estão corretos.
                Por favor, tente novamente.`
                }
              </p>
            )
            : null
        }
      </div>
    </main>
  );
}
