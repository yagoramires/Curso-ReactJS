import { useEffect, useState } from 'react';

const HookUseEffect = () => {
  const [number, setNumber] = useState(0);

  // 1- useEffect sem array de dependencias
  useEffect(() => {
    console.log(
      '1 - Sem array de dependencias, loga em toda alteração do componente'
    );
  });

  // 2- useEffect com array de dependencias vazio
  useEffect(() => {
    console.log(
      '2- Com array de dependencias vazio, loga somente uma vez, ao montar o componente'
    );
  }, []);

  // 3- useEffect com array de dependencias
  useEffect(() => {
    if (number > 0) {
      console.log(
        '3 - Com array de dependencias, loga em toda alteração do valor monitorado'
      );
    }
  }, [number]);

  // 4 - Clean Up do useEffect - Limpar o useEffect para que não vá para outra página
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Hello World')
    }, 2000)

    return () => clearTimeout(timer)
  },[number])

  return (
    <div>
      <h1>HookUseEffect</h1>
      <p>Numero: {number}</p>
      <button onClick={() => setNumber(number + 1)}>Adicionar</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
