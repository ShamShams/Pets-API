import React, { Component } from 'react';

class List extends Component {
  render() {
    const pets = this.props.pets.map((pet) =>
      <li>{pet.nom}</li>
    );

    return (
      <div className="App">
        <ul>{pets}</ul>
      </div>
    );
  }
}

export default List;
