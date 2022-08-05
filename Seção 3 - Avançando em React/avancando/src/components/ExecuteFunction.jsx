import React from 'react';

const ExecuteFunction = ({ myFunc }) => {
  return (
    <div>
      <button onClick={myFunc}>Execute a Func</button>
    </div>
  );
};

export default ExecuteFunction;
