import './App.css';
import CarDetails from './components/CarDetails';
// import MyComponent from './components/MyComponent';
// import Title from './components/Title';

function App() {
  // const variavel = true;
  const cars = [
    { id: 1, brand: 'Ferrari', model: '812', year: 2020, color: 'Red' },
    {
      id: 2,
      brand: 'Lamborghini',
      model: 'Aventador',
      year: 2019,
      color: 'Green',
    },
    {
      id: 3,
      brand: 'Lamborghini',
      model: 'Huracan',
      year: 2021,
      color: 'Yellow',
    },
    { id: 4, brand: 'Mercedes', model: 'AMG GT', year: 2020, color: 'Blue' },
  ];

  return (
    <div className='App'>
      {/* <h1>Seção 4 - React e CSS</h1>
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
      <Title /> */}
      <h1 className='title'>Car details</h1>
      <div className='car-cards'>
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            model={car.model}
            year={car.year}
            color={car.color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
