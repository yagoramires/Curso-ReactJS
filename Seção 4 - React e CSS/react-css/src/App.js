import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const variavel = true;

  return (
    <div className='App'>
      <h1>Seção 4 - React e CSS</h1>
      <MyComponent />
      <p>Este componente também recebe a estilização do p em MyComponent</p>
      <p style={{ color: 'blue', backgroundColor: 'yellow' }}>
        Este componente recebe estilização inline (deve ser evitado)
      </p>
      <p style={variavel ? { color: 'purple' } : { color: 'pink' }}>
        CSS inline Dinamico true
      </p>
      <p style={!variavel ? { color: 'purple' } : { color: 'pink' }}>
        CSS inline Dinamico false
      </p>
      <h2 className={variavel ? 'red-title' : 'title'}>
        Este titulo terá classe dinâmica
      </h2>
      <h2 className={!variavel ? 'red-title' : 'title'}>
        Este titulo terá classe dinâmica
      </h2>
      <Title />
    </div>
  );
}

export default App;
