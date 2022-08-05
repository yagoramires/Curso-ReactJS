import React from 'react';
import './CarDetails.css';

const CarDetails = ({ brand, model, year, color }) => {
  return (
    <div className='car-container'>
      <p>
        <span>Brand:</span> {brand}
      </p>
      <p>
        <span>Model:</span> {model}
      </p>
      <p>
        <span>Year:</span> {year}
      </p>
      <p>
        <span>Color:</span> {color}
      </p>
    </div>
  );
};

export default CarDetails;
