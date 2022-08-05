import React from 'react';
import { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Pera', 'Uva', 'Maçã', 'Banana', 'Maracujá']);
  const [users, setUsers] = useState([
    { id: 1, name: 'Yago', job: 'Developer' },
    { id: 2, name: 'Nathalia', job: 'Lawyer' },
    { id: 3, name: 'Gabriel', job: 'Professor' },
    { id: 4, name: 'Fabiola', job: 'Nurse' },
    { id: 5, name: 'Daniel', job: 'Programmer' },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * (users.length + 1));
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem' }}>
      <div>
        {list.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
        {/* não recomendado utilizar index como key */}
      </div>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            Nome:{user.name} Profissão: {user.job}
          </p>
        ))}
        <button onClick={deleteRandom}> Remove user</button>
      </div>
    </div>
  );
};

export default ListRender;
