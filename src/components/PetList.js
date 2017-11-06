import React, { Component } from 'react';

class PetList extends Component {
  render() {
    const pets = this.props.pets.map(pet =>
      <li>Espèce: {pet.species} - Nom : {pet.name} - Race: {pet.breed} - Age: {pet.age} 
        <a href={`http://localhost:3005/pets/${pet._id}/delete`}><button>X</button></a>
      </li>
    );

    return (
      <div className="App">
        <ul>{pets}</ul>
      </div>
    );
  }
}

export default PetList;
