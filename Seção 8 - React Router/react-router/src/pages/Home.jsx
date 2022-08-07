import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import { useFetch } from '../hooks/useFetch';

const Home = () => {
  const url = 'http://localhost:3000/products';
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const { data: items, loading, error, httpConfig } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();

    httpConfig(
      {
        name,
        price,
      },
      'POST',
    );

    setName('');
    setPrice('');
  };
  const handleDelete = (id) => {
    httpConfig(id, 'DELETE');
  };

  return (
    <div className='products-container'>
      <h1 className='title'>Produtos:</h1>
      {error && <p>{error}</p>}
      <ul className='list'>
        {items &&
          items.map((item) => (
            <li key={item.id} className='list-item'>
              <Link to={`/products/${item.id}`}>
                <p className='product-name'>{item.name}: </p>
                <p className='product-price'>
                  {item.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </Link>
              <button
                onClick={() => handleDelete(item.id)}
                className='deleteBtn'
              >
                x
              </button>
            </li>
          ))}
      </ul>
      <h2 className='title'>Adicionar produtos:</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label className='label'>
          Nome:
          <input
            required
            className='form-input-add'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className='label'>
          Preço:
          <input
            required
            className='form-input-add'
            type='number'
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </label>
        {loading ? (
          <input disabled type='submit' className='form-submit' />
        ) : (
          <input type='submit' className='form-submit' />
        )}
      </form>
    </div>
  );
};

export default Home;
