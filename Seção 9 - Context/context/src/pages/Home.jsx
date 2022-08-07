import React, { useContext } from 'react';

import { CounterContext } from '../context/CounterContext';

const Home = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
};

export default Home;
