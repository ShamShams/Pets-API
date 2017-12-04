import React, { Component } from 'react';

import catImg from '../images/catDefaultImg.jpg';
import dogImg from '../images/dogDefaultImg.jpg';

import '../stylesheets/List.css';

class List extends Component {
  render() {
    let petImg = (pet) => {
      if (pet.photo) return `uploads/${pet.photo}`;
      else if (pet.species === 'Chat') return catImg;
      else return dogImg;
    } // Affiche la photo envoyée dans le formulaire s'il y en a une, sinon affiche un avatar de chat ou de chien par default selon l'animal.

    return (
      <div className="List">
        {this.props.pets.map((pet, i) =>
          <div key={i} className="Card">
            <a className="close" href={`http://localhost:3005/pets/${pet._id}/delete`}>x</a>
            <div className="Card-img">
              <img src={petImg(pet)} alt="Animal"/>
            </div>
            <div className="Card-info">
              <h1 className="Card-info-name">{pet.name}</h1>
              <p>{pet.species} {pet.breed} - {pet.age}, {pet.sex}</p>
              <p>{pet.department} - {pet.city}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default List;
