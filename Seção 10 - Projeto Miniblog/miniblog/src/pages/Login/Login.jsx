import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, error: authError, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      email,
      password,
    };

    // eslint-disable-next-line no-unused-vars
    const res = await login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <section className={styles.loginContainer}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span> E-mail:</span>
          <input
            type='email'
            required
            placeholder='Insira seu e-mail'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span> Senha:</span>
          <input
            type='password'
            required
            placeholder='Insira sua senha'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {!loading && (
          <button type='submit' value='Registrar' className='btn btn-dark'>
            Cadastrar
          </button>
        )}
        {loading && (
          <button
            type='submit'
            value='Registrar'
            className='btn btn-dark'
            disabled
          >
            Aguarde ...
          </button>
        )}
        {error && <p className='error'>{error}</p>}
      </form>
    </section>
  );
};

export default Login;
