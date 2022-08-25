// 4 - Importando componentes
import Destructuring from './components/Destructuring';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import State from './components/State';

function App() {
  // 1- Variáveis
  const name: string = 'Yago';
  const age: number = 26;
  const isWorking: boolean = true;

  // 2- Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}.`;
  };

  return (
    <div className='App'>
      <h1>TypeScript com React</h1>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      {/* Aula 5 - Passando props */}
      <SecondComponent name='Klebi' />
      {/* Aula 6 - Desetruturando props */}
      <Destructuring
        title='Primeiro post'
        content='Tecnologias Frontend'
        commentsQnt={12}
        tags={['HTML', 'CSS', 'JS']}
      />
      <Destructuring
        title='Segundo post'
        content='Tecnologias Backend'
        commentsQnt={12}
        tags={['Node', 'Express', 'Mongo']}
      />
      <State />
    </div>
  );
}

export default App;
