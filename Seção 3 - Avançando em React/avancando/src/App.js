import './App.css';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import image from './assets/img.jpg';
import ShowUsername from './components/ShowUsername';
import { useState } from 'react';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/Tarefa';

function App() {
  const [username] = useState('Kleber');

  const [cars] = useState([
    { id: 1, brand: 'Ferrari', color: 'Vermelho', newCar: false, km: 12320 },
    { id: 2, brand: 'Lamborghini', color: 'Amarelo', newCar: true, km: 0 },
    { id: 3, brand: 'Mercedes', color: 'Branca', newCar: false, km: 67840 },
  ]);

  const [message, setMessage] = useState('State Lift');
  const showMessage = () => {
    console.log(message);
  };

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    { name: 'Kleber', age: 17, job: 'Engenheiro' },
    { name: 'Yago', age: 26, job: 'Desenvolvedor' },
    { name: 'Fabiola', age: 45, job: 'Enfermeira' },
    { name: 'Nathalia', age: 25, job: 'Advogada' },
  ];

  return (
    <div className='App'>
      <h1>Seção 3</h1>
      <img
        src='/img.jpg'
        alt=''
        style={{ width: '250px', marginRight: '10px' }}
      />
      <img src={image} alt='' style={{ width: '250px' }} />

      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUsername name={username} />

      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
          key={car.id}
        />
      ))}
      <Fragment />
      <Container myValue='12'>
        <p>este é o conteudo</p>
      </Container>
      <ExecuteFunction myFunc={showMessage} />
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {pessoas.map((pessoa) => (
        <UserDetails name={pessoa.name} age={pessoa.age} job={pessoa.job} />
      ))}
    </div>
  );
}

export default App;
