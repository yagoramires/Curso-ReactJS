import React from 'react';
import { NavLink } from 'react-router-dom';

import Search from './SearchForm';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>REACT ROUTER</h1>

      <nav>
        <NavLink to='/'>Home</NavLink>
        {/* padrao quando a barra esta ativa  */}
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'ativo' : 'nao-ativo')}
        >
          Sobre
        </NavLink>
        {/* propriedade isActive do NavLink que me permite definir a classe  */}
      </nav>

      <Search />
    </header>
  );
};

export default Header;
