import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <h1>Context</h1>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>Sobre</NavLink>
        <NavLink to='/contact'>Contato</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
