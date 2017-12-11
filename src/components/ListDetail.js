import React, { Component } from 'react';
import "../stylesheets/ListDetail.css";
import catImg from '../images/catDefaultImg.jpg';
import dogImg from '../images/dogDefaultImg.jpg';

class ListDetail extends Component {
  state = {
    pet: []
  }

  componentDidMount() {
    fetch(`http://localhost:3005/pets/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(result => {
          this.setState({
            pet: result
          })
        })
        .catch((res, err) => res.send(err));
  }

  render() {
    const pet = this.state.pet;

    const petImg = (pet) => {
      if (pet.photo) return `uploads/${pet.photo}`;
      else if (pet.species === 'Chat') return catImg;
      else return dogImg;
    }

    return (
      <div>
        {
          this.state.pet ?
          <div className="ListDetail">
            <div className="ListDetail-container">
              <div className="Pet-info">
                <img className="Pet-img" src={`uploads/${pet.photo}`} alt="Animal"/>
                <div className="Pet-info-text">
                  <h1 className="Pet-name">{pet.name}</h1>
                  <p><span>Race : </span>{pet.species}</p>
                  <p><span>Sexe : </span> {pet.sex}</p>
                  <p><span>Age :</span> {pet.age}</p>
                  <p><span>Caractère : </span></p>
                  <p><span>Description : </span><br/>{pet.description}</p>
                </div>
              </div>

              <div className="Contact-info">
                <h4>Lieu & Contact</h4>
                <p><span>Lieu : </span>{pet.city}</p>
                <p><span>Email : </span>{pet.email}</p>
                <p><span>Téléphone : </span>{pet.phone}</p>
              </div>

              <div className="buttons">
                <a href="#" className="btn update-btn">Modifier</a>
                <a href="#" className="btn delete-btn">Supprimer</a>
              </div>
            </div>
          </div>
          :
          <div>
            ... Loading ...
          </div>
        }
      </div>
    );
  }
}

export default ListDetail;
