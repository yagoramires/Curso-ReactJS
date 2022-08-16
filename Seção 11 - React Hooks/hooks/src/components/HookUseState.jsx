import { useState } from 'react';

const HookUseState = () => {
  // 1- useState

  let username = 'João';

  const [name, setName] = useState('Yago');

  const changeNames = () => {
    username = 'Kléber Madeira';
    setName('Yago Madeira');

    // console.log(username);
  };
  //   console.log(name);

  // 2- useState no input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    // envio dos dados para a API
    console.log(age);
  };

  return (
    <>
      <div>
        {/* 1 - useState */}
        <h2>useState</h2>

        <p>Variável: {username}</p>
        <p>useState: {name}</p>

        <button onClick={changeNames}>Alterar!</button>
      </div>

      {/* 2 - useState no input*/}
      <form onSubmit={handleSubmit}>
        <label>
          <p> Digite sua idade: </p>
          <input
            type='number'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input type='submit' value={'enviar'} />
          <p>Você tem {age} anos!</p>
          {/* // Controlled Input (atribui o state ao value) */}
        </label>
      </form>
    </>
  );
};

export default HookUseState;
