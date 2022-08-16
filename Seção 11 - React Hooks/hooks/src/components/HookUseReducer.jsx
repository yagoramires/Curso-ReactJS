import { useReducer, useState } from 'react';

const initialTasks = [
  { id: 1, text: 'Faz algo' },
  { id: 2, text: 'Faz outra coisa' },
  { id: 3, text: 'Faz mais uma coisa' },
];

const HookUseReducer = () => {
  // 1 - Começando com useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 2 -

  const taskReducer = (state, action) => {

    switch (action.type) {
      case 'ADD': 
      const newTask = {
        id: Math.random(),
        text: taskText
      }

      setTaskText('')
      
        return [...state, newTask]
      case 'DELETE':
        return state.filter((task) => task.id !== action.id)
     
      default:
        return state;
    }

  };

  const [taskText, setTaskText] = useState('');
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({type: 'ADD'});
  };

  const handleDelete = (id) => {
    dispatchTasks({type: 'DELETE', id});
  }


  // 3 - Calculadora com Reducer

    const calcReducer = (state, action) => {
      let calc
      switch (action.type) {
        case '+':
           calc = Number(valueX) + Number(valueY)
          setValueX('')
          setValueY('')
          return calc
        case '-':
          calc = Number(valueX) - Number(valueY)
          setValueX('')
          setValueY('')
          return calc
        case '*':
          calc = Number(valueX) * Number(valueY)
          setValueX('')
          setValueY('')
          return calc
        case '/':
          calc = Number(valueX) / Number(valueY)
          setValueX('')
          setValueY('')
          return calc
        default:
          return state
      }

    }

    const [valueX, setValueX] = useState(0)
    const [valueY, setValueY] = useState(0)
    const [calculate, dispatchCalculate] = useReducer(calcReducer)

    const handleCalc = (type) => {
      dispatchCalculate({type: type})
    }

  return (
    <div>
      <h1>HookUseReducer</h1>
      {/* 1 - useReducer simples - similar ao useState, porém executa uma função */}
      <div>
        <p>Este é o número aleatório: {number}</p>
        <button onClick={dispatch}>Gerar</button>
      </div>

      {/* 2 - useReducer avançado */}
      <div>
        <h3>Tarefas</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text} <button onClick={() => handleDelete(task.id)}>Delete</button> </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nova tarefa:</span>
            <input
              type='text'
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
            />
            <input type='submit' value='Adicionar' />
          </label>
        </form>
      </div>
      {/* 3 - Calculadora */}
      <div>
        <input type="number" value={valueX} onChange={(e) => setValueX(e.target.value)}/>
        <input type="number" value={valueY} onChange={(e) => setValueY(e.target.value)}/>
           <button onClick={() => handleCalc('+')} style={{width:'25px'}}>+</button>
           <button onClick={() => handleCalc('-')} style={{width:'25px'}}>-</button>
           <button onClick={() => handleCalc('*')} style={{width:'25px'}}>*</button>
           <button onClick={() => handleCalc('/')} style={{width:'25px'}}>/</button>
           <p>Resultado: {calculate}</p>
      </div>
      <hr />
    </div>
  );
};

export default HookUseReducer;
