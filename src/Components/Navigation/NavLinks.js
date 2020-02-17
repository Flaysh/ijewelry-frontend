import React , {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';
import { LoginContext } from '../../context/LoginContext';

const NavLinks = props => {

  const auth = useContext(LoginContext);

  return (
    <ul className="nav-links">
      <li className="home-link">
        <NavLink to="/" exact>Home</NavLink>
      </li>
      {!auth.isLoggedIn && <li>
        <NavLink to="/login">Login</NavLink>
      </li>}
      {!auth.isLoggedIn && <li>
        <NavLink to="/register">Register</NavLink>
      </li>}
      <li>
        <NavLink to="/catalog">Catalog</NavLink>
      </li>
      {auth.isLoggedIn && <li>
        <NavLink to="/add">Add</NavLink>
      </li>}
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {auth.isLoggedIn && <li>
        <a onClick={auth.logout}>Logout</a>
      </li>}
    </ul>
  );
};

export default NavLinks;