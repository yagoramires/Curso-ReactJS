import React from 'react';
import { useState } from 'react';

const ConditionalRender = () => {
  const [x] = useState(true);
  const [y] = useState(false);

  const [name, setName] = useState('Kleber');

  return (
    <div>
      <div>
        <h2>Validação simples</h2>
        {x && <p>se X for true, sim!</p>}
        {!y && <p>Agora Y é falso</p>}
        {/* //validação simples */}
      </div>

      <div>
        <h2>if ternário</h2>
        {name === 'Yago' ? <p>O nome é {name}</p> : <p>nome não encontrado!</p>}
        <button onClick={() => setName('Yago')}>Mudar nome</button>
      </div>
    </div>
  );
};

export default ConditionalRender;
