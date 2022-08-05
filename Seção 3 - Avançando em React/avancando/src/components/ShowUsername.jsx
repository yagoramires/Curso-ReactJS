import React from 'react';

const ShowUsername = (props) => {
  return (
    <div>
      O nome do usuário é: <b> {props.name} </b>
    </div>
  );
};

export default ShowUsername;
