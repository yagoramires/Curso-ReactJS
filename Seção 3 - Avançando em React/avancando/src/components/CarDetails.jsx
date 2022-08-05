import React from 'react';

const carDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>carDetails:</h2>
      <ul>
        <li>{brand}</li>
        <li>{km}</li>
        <li>{color}</li>
      </ul>
      {newCar && <p>Carro Zero Balaaaaaaaaaa!</p>}
    </div>
  );
};

export default carDetails;
