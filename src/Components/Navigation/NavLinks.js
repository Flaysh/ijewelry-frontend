import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li className="home-link">
      <NavLink to="/" exact>Home</NavLink>
    </li>
    <li>
      <NavLink to="/catalog">Catalog</NavLink>
    </li>
    <li>
      <NavLink to="/add">Add</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
  </ul>
};

export default NavLinks;