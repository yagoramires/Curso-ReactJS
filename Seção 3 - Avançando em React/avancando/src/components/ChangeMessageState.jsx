import React from 'react';

const ChangeMessageState = ({ handleMessage }) => {
  const messages = ['oi', 'olá', 'Oi, td bem?'];

  return (
    <div>
      {messages.map((message, i) => (
        <button key={i} onClick={() => handleMessage(message)}>
          {message}
        </button>
      ))}
    </div>
  );
};

export default ChangeMessageState;
