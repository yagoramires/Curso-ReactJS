import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>REACT ROUTER</h1>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>Sobre</Link>
      </nav>
    </header>
  );
};

export default Header;
