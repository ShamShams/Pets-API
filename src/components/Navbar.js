import React from 'react';
import { NavLink } from 'react-router-dom';

import "../stylesheets/Navbar.css";

const Navbar = (props) =>
  <nav>
    <ul>
      <li><NavLink to="/animaux" className="brand">SPA</NavLink></li>
      <div className="nav-right">
        <li><NavLink to="/animaux">Nos animaux</NavLink></li>
        <li><NavLink to="/ajouter">Ajouter un animal</NavLink></li>
      </div>
    </ul>
  </nav>

export default Navbar;
