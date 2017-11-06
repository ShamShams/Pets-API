import React, { Component } from 'react';

class PetList extends Component {
  render() {
    const pets = this.props.pets.map(pet =>
      <div className="PetCard">
        <div className="cardSpecies">{pet.species}</div>
        <a className="close" href={`http://localhost:3005/pets/${pet._id}/delete`}>X</a>
        <h3>{pet.name}</h3>
        <p>Race: {pet.breed}</p>
        <p>Age: {pet.age}</p>
        <ul>
          {pet.affectionate && <li>affectueux</li>}
          {pet.quiet && <li>calme</li>}
          {pet.playful && <li>joueur</li>}
        </ul>
      </div>
    );

    return (
      <div className="PetList">
        {pets}
      </div>
    );
  }
}

export default PetList;
