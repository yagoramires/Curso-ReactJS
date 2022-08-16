import { useState, useEffect, useMemo } from 'react';

const HookUseMemo = () => {
  // o useMemo tem o mesmo objetivo do useCallback, melhorar a performance.
  // Porem, ao contrario do useCallback que serve para funcoes, o useMemo serve para valores.

  const [number, setNumber] = useState(0);

  // const premiumNumbers = ['0', '100', '200'];
  const premiumNumbers = useMemo(()=>{
    return  ['0', '100', '200']
  }, []);

  useEffect(() => {
    console.log('PremiumNumbers foi alterado');
  }, [premiumNumbers]);

  return (
    <div>
      <h1>HookUseMemo</h1>

      <input type='text' onChange={(e) => setNumber(e.target.value)} />

      {premiumNumbers.includes(number) ? <p>Acertou!</p> : <p>Errou!</p>}
    </div>
  );
};

export default HookUseMemo;
