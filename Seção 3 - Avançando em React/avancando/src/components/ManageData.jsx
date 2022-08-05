import React, { useState } from 'react';

const ManageData = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <div>
        <h2>{number}</h2>
        <button onClick={() => setNumber(number + 1)}>+ 1</button>
      </div>
    </div>
  );
};

export default ManageData;
