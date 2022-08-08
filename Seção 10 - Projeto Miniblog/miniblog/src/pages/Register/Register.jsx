import React from 'react';

import { useState, useEffect } from 'react';

import { useAuth } from '../../hooks/useAuth';

import styles from './Register.module.css';

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser, error: authError, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      displayName,
      email,
      password,
    };

    if (confirmPassword !== password) {
      setError('As senhas precisam ser iguais!');
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <section className={styles.registerContainer}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span> Nome: </span>
          <input
            type='text'
            required
            placeholder='Insira seu nome'
            name='displayName'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
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
        <label>
          <span> Confirmação de senha:</span>
          <input
            type='password'
            required
            placeholder='Confirme sua senha'
            name='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && (
          <button type='submit' value='Registrar' className='btn btn-dark'>
            Cadastrar
          </button>
        )}
        {loading && (
          <button type='submit' value='Registrar' className='btn' disabled> 
            Aguarde ...
          </button>
        )}
        {error && <p className='error'>{error}</p>}
      </form>
    </section>
  );
};

export default Register;
