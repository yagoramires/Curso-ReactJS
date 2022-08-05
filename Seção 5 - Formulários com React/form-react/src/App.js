import './App.css';
import MyForm from './components/MyForm';

function App() {
  const user = {
    name: 'Yago Ramires',
    email: 'yago@gmail.com',
  };

  return (
    <div className='App'>
      <h2>Forms</h2>
      <MyForm user={user} />
    </div>
  );
}

export default App;
