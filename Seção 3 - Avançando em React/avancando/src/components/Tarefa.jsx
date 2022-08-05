import React from 'react';

const UserDetails = ({ name, job, age }) => {
  return (
    <div>
      <h2>User Details:</h2>
      <p>Nome: {name}</p>
      <p>Nome: {job}</p>
      {age >= 18 ? (
        <p> Pode tirar carteira!</p>
      ) : (
        <p>Não pode tirar carteira :/</p>
      )}
    </div>
  );
};

export default UserDetails;
