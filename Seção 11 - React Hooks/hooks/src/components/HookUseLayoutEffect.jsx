import { useEffect, useLayoutEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
  // Similar ao useEffect, porém funciona de maneira sincrona e trava a execução do resto do código

  const [name, setName] = useState('kleber')

  useEffect(() => {

    console.log('2')
    setName('Mudou o nome de novo!')

  },[])

  useLayoutEffect(() => {
    console.log('1')
    setName('Outro Nome')
  },[]) // sempre serar executado primeiro, antes de iniciar qualquer coisa no componente
  
  console.log(name)

  return (
    <div>
      <h1>HookUseLayoutEffect</h1>
    </div>
  )
}

export default HookUseLayoutEffect