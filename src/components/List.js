import React, { Component } from 'react';
import { Title } from "./Title";

import catImg from '../images/catDefaultImg.jpg';
import dogImg from '../images/dogDefaultImg.jpg';

import '../stylesheets/List.css';

class List extends Component {
  render() {
    const petImg = (pet) => {
      if (pet.photo) return `uploads/${pet.photo}`;
      else if (pet.species === 'Chat') return catImg;
      else return dogImg;
    } // Affiche la photo envoyée dans le formulaire s'il y en a une, sinon affiche un avatar de chat ou de chien par default selon l'animal.

    return (
      <div className="List">
        <div className="List-header">
          <Title title="Nos animaux"/>
        </div>

        {this.props.pets.map((pet, i) =>
          <div key={i} className="Card">
            <div className="Card-img">
              <img src={petImg(pet)} alt="Animal"/>
            </div>
            <div className="Card-info">
              <h1 className="Card-info-name">{pet.name}</h1>
              <p>{pet.species} {pet.breed} - {pet.age}, {pet.sex}</p>
              <p>{pet.department} - {pet.city}</p>
              <a href={`http://localhost:3000/animaux/${pet._id}`} className="view-btn">VOIR</a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default List;
