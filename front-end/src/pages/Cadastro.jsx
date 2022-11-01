import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestRegister } from '../services/requests';

export default function Redister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [failedTryRegister, setFailedTryRegister] = useState(false);

  useEffect(() => {
    const nameRule = 12;
    const passwordRule = 6;
    const errors = [
      !name || name.length < nameRule,
      !email || !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
      !password || password.length < passwordRule,
    ];
    const hasErrors = errors.some((error) => error);
    setDisableButton(hasErrors);
  }, [name, email, password]);

  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();
    setFailedTryRegister(false);
    try {
      const response = await requestRegister('/users', { name, email, password });
      localStorage.setItem('userTrybeer', JSON.stringify(response));
      return navigate('/customer/products');
    } catch (error) {
      setFailedTryRegister(true);
    }
  };

  return (
    <section className="user-cadastro">
      <form>
        <label htmlFor="name-input">
          <input
            className="register__input-name"
            type="text"
            data-testid="common_register__input-name"
            onChange={ ({ target: { value } }) => { setName(value); } }
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email-input">
          <input
            className="common_register__input-email"
            type="text"
            data-testid="common_register__input-email"
            onChange={ ({ target: { value } }) => { setEmail(value); } }
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="password-input">
          <input
            className="common_register__input-password"
            type="text"
            data-testid="common_register__input-password"
            onChange={ ({ target: { value } }) => { setPassword(value); } }
            placeholder="**********"
          />
        </label>
        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ disableButton }
          onClick={ (event) => register(event) }
        >
          Cadastrar
        </button>
      </form>
      <div>
        { (failedTryRegister)
          ? (
            <p data-testid="common_register__element-invalid_register">
              O email já está cadastrado em nosso banco de dados.
            </p>
          ) : null}
      </div>
    </section>
  );
}
