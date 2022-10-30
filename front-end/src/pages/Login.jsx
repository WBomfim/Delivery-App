import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestLogin } from '../services/requests';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  useEffect(() => {
    const lengthVerification = 6;
    const errors = [
      !email || !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
      !password || password.length < lengthVerification,
    ];
    const hasErrors = errors.some((error) => error);
    setDisableButton(hasErrors);
  }, [email, password]);

  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await requestLogin('/login', { email, password });
      localStorage.setItem('userTrybeer', JSON.stringify(response));
      if (response.role === 'seller') {
        navigate('/seller/orders');
      }
      navigate('/customer/products');
    } catch (error) {
      setFailedTryLogin(true);
    }
  };

  return (
    <section className="user-login-area">
      <form>
        <label htmlFor="email-input">
          <input
            className="login__login_input"
            type="text"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="common_login__input-email"
            placeholder="email@trybeer.com.br"
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            data-testid="common_login__input-password"
            placeholder="*************"
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ disableButton }
          onClick={ (event) => login(event) }
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
      <div>
        {
          (failedTryLogin)
            ? (
              <p data-testid="common_login__element-invalid-email">
                {
                  `O endereço de e-mail ou a senha não estão corretos.
                Por favor, tente novamente.`
                }
              </p>
            )
            : null
        }
      </div>
    </section>
  );
}
