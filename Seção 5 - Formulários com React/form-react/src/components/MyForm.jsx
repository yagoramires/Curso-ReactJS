import React from 'react';
import { useState } from 'react';
import './MyForm.css';

const MyForm = ({ user }) => {
  const [inputName, setInputName] = useState(user ? user.name : '');
  const [inputEmail, setInputEmail] = useState(user ? user.email : '');
  const [inputBio, setInputBio] = useState(user ? user.bio : '');
  const [select, setSelect] = useState(user ? user.select : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputEmail, inputName, inputBio, select);

    setInputName('');
    setInputEmail('');
    setInputBio('');
    setSelect('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      {/* 1 - Label com htmlFor */}
      <div>
        <label htmlFor='name'>Nome:</label>
        <input
          type='text'
          name='name'
          placeholder='Digite seu nome'
          onChange={(e) => setInputName(e.target.value)}
          value={inputName}
        />
      </div>
      {/* 2 - Label envolvendo input */}

      <label>
        <span>Email:</span>
        <input
          type='email'
          name='email'
          placeholder='Digite seu email'
          onChange={(e) => setInputEmail(e.target.value)}
          value={inputEmail}
        />
      </label>

      <label>
        <span>Bio:</span>
        <textarea
          placeholder='Descrição do usuário'
          onChange={(e) => setInputBio(e.target.value)}
          value={inputBio}
        />
      </label>

      <label>
        <span>Função no sistema</span>
        <select
          name='role'
          onChange={(e) => setSelect(e.target.value)}
          value={select}
        >
          <option value='user'>Usuário</option>
          <option value='editor'>Editor</option>
          <option value='admin'>Administrador</option>
        </select>
      </label>

      <input type='submit' value='Enviar' />
    </form>
  );
};

export default MyForm;
