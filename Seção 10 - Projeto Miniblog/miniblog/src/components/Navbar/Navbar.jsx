import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <NavLink to='/'>
          <span>
            Mini<span>blog</span>
          </span>
        </NavLink>
        <nav>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          >
            Sobre
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
