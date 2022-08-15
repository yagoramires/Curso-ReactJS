import React, { useContext } from 'react'
import { ContextHook } from '../context/Context';

const HookeUseContext = () => {
  const { contextValue} = useContext(ContextHook);
  return (
    <div>
      <h1>HookeUseContext</h1>
      <p>Valor do contexto: {contextValue}</p>
    </div>
  )
}

export default HookeUseContext