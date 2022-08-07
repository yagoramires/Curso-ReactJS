import React from 'react';

import { useFetch } from '../hooks/useFetch';

import { useSearchParams, Link } from 'react-router-dom';

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = 'http://localhost:3000/products?' + searchParams;
  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <p>Carregando ...</p>}
      <ul>
        {items &&
          items.map((item) => (
            <Link to={`/products/${item.id}`}>
              <p className='product-name'>{item.name}: </p>
              <p className='product-price'>
                {item.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Search;
