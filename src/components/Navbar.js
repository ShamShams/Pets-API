import React, { Component } from 'react';

import '../stylesheets/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav>
          <ul>
            <a className="brand" href="#">Adopte un animal</a>
            <li><a href="#">Trouver un animal</a></li>
            <li><a href="#">Ajouter un animal</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;
