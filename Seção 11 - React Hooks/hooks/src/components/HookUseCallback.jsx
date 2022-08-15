import {useCallback, useState} from 'react'

import List from './List'

const HookUseCallback = () => {

  const [counter,setCounter] = useState(0)

  const getItemsFromDataBase = useCallback(() => {

    return ['A','B','C','D','E','F']

  },[]) // Melhora a performance do componente, pois nao será necessário consumir os dados da api em todas as renderizações. Porém ele também possui um array de dependencias caso seja necessário

  return (
    <div>
      <h1>HookUseCallback</h1>
      <List getItems={getItemsFromDataBase}></List>
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
    </div>
  )
}

export default HookUseCallback