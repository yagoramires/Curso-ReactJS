import './App.css';
import { useState } from 'react';

import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products';

function App() {
  // const [products, setProducts] = useState([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data);
  //   };

  //   fetchData();
  // }, []); // Recebe os dados da API

  const { data: items, httpConfig, loading, error } = useFetch(url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(product),
    // });

    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    httpConfig(product, 'POST');

    setName('');
    setPrice('');
  };

  const handleDelete = (id) => {
    httpConfig(id, 'DELETE');
  };

  return (
    <div className='App'>
      <h1>Lista de produtos</h1>

      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
              <button onClick={() => handleDelete(product.id)}>x</button>
            </li>
          ))}
      </ul>
      {loading && <p>Carregando dados ...</p>}
      {error && <p>{error}</p>}

      <form className='formContainer' onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Preço:
          <input
            type='text'
            name='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        {loading ? (
          <input type='submit' disabled value='Aguarde' />
        ) : (
          <input type='submit' value='Adicionar' />
        )}
      </form>
    </div>
  );
}

export default App;
