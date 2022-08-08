import React from 'react';

import { useCounterContext } from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
  const { counter, setCounter } = useCounterContext();
  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color})

  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
      <div>
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('GREEN')}>Verde</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
        <button onClick={() => setTitleColor('YELLOW')}>Amarelo</button>
      </div>
    </div>
  );
};

export default Home;
