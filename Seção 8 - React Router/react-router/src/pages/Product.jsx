import React from 'react';

import { useFetch } from '../hooks/useFetch';

import { Link, useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  const url = 'http://localhost:3000/products/' + id;

  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p> ID do produto: {id}</p>

      {error && <p>{error}</p>}
      {loading && <p>Carregando ...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
