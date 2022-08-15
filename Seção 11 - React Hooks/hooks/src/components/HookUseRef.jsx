import { useEffect, useRef, useState } from 'react';

const HookUseRef = () => {
  // useRef funciona como um useState, serve para gerenciar valores
  // Ele é um objeto e seu valor está na propriedade current
  // Ele não re-renderiza o componente ao ser alterado

  // 1- Referencia de valor
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
    // setCounter(counter + 1)
  }); // ao contrario do useState, o useRef não irá re renderizar o componente, previnindo um loop infinito, pois toda vez q o state chamar o valor ele irá atualizar o componente infinitamente

  // 2- Pode ser utilizado para selecionar elementos do JSX, permitindo manipular o DOM como no query selector do JS.

  const inputRef = useRef();

  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputRef);
    setText('')
    inputRef.current.focus() // foca no input ao enviar
  };

  return (
    <div>
      <h1>HookUseRef</h1>

      <div>
        <p>O componente renderizou: {numberRef.current} vezes.</p>

        <p>Counter A: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Adicionar A</button>

        <p>Counter B: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>Adicionar B</button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type='submit' value='Enviar' />
      </form>

      <hr />
    </div>
  );
};

export default HookUseRef;
