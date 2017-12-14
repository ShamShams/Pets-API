import React from 'react';

import catImg from '../images/catDefaultImg.jpg';
import dogImg from '../images/dogDefaultImg.jpg';

import '../stylesheets/Card.css';

const Card = (props) => {
  const petImg = (pet) => {
    if (pet.photo) return `uploads/${pet.photo}`;
    else if (pet.species === 'Chat') return catImg;
    else return dogImg;
  } // Affiche la photo envoyée dans le formulaire s'il y en a une, sinon affiche un avatar de chat ou de chien par default selon l'animal

  return (
    <div className="Card">
      <div className="Card-img">
        <img src={petImg(props)} alt="Animal"/>
      </div>
      <div className="Card-info">
        <h1 className="Card-info-name">{props.name}</h1>
        <p>{props.species} {props.breed} - {props.age}, {props.sex}</p>
        <p>{props.department} - {props.city}</p>
        <a href={`http://localhost:3000/animaux/${props._id}`} className="view-btn">VOIR</a>
      </div>
    </div>
  )
}

export default Card;
