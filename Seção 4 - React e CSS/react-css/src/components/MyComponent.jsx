import React from 'react';
import './MyComponent.css';

const MyComponent = () => {
  return (
    <div>
      <p>Estilizado sem classe</p>
      <p className='paragraph'>Estilizado com classe</p>
    </div>
  );
};

export default MyComponent;
