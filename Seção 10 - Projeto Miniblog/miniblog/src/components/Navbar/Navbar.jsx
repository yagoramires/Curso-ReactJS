import { NavLink } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useAuthValue } from '../../context/AuthContext';

import styles from './Navbar.module.css';

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuth();

  return (
    <header className={styles.headerContainer}>
      <div>
        <NavLink to='/'>
          <span>
            Mini<span>blog</span>
          </span>
        </NavLink>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              Sobre
            </NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink
                  to='/login'
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ''
                  }
                >
                  Entrar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/register'
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ''
                  }
                >
                  Registrar
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink
                  to='/posts/create'
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ''
                  }
                >
                  Novo post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/dashboard'
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ''
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <li>
              <button onClick={logout} className='' >Sair</button>
            </li>
          )}

        </ul>
      </div>
    </header>
  );
};

export default Navbar;
