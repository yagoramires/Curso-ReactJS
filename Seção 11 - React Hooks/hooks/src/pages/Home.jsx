/* eslint-disable no-unused-vars */
import React from 'react';
import HookUseState from '../components/HookUseState';
import HookeUseContext from '../components/HookeUseContext';
import HooksCustom from '../components/HooksCustom';
import HookUseCallback from '../components/HookUseCallback';
import HookUseEffect from '../components/HookUseEffect';
import HookUseLayoutEffect from '../components/HookUseLayoutEffect';
import HookUseMemo from '../components/HookUseMemo';
import HookUseReducer from '../components/HookUseReducer';
import HookUseRef from '../components/HookUseRef';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '2rem',
      }}
    >
      {/*
       <HookUseState/>
       <HookUseReducer/>
      <HookUseEffect/>
      <HookeUseContext/>
      <HookUseRef/> 
      <HookUseCallback/>
      <HookUseMemo/>
      <HookUseLayoutEffect/>
      */}
      <HooksCustom />
    </div>
  );
};

export default Home;
