import {useState} from 'react'
import {usePrevious} from '../hooks/usePrevious'

const HooksCustom = () => {

  const [number, setNumber] = useState(0)

  const previousValue = usePrevious(number)

  return (
    <div>
      <h1> Custom Hook </h1>
      <p>Atual: {number}</p>
      <p>Antigo: {previousValue}</p>
      <button onClick={() => setNumber(Math.random())}>Adicionar</button>
    </div>
  )
}

export default HooksCustom