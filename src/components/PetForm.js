import React, { Component } from 'react';

class PetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: 'Chat',
      age: 'adult',
      affectionate: false,
      quiet: false,
      playful: false
    };
  }

  handleSpeciesChange = (event) => {
    this.setState({ species: event.target.value })
  }

  handleAgeChange = (event) => {
    this.setState({ age: event.target.value })
  }

  toggle = (event) => {
    const name = event.target.name;
    this.setState({ [name]: !this.state.name })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <p>Vous avez trouvé un animal ? Ajoutez-le ici:</p>
        <form action="http://localhost:3005/pets/add" method="POST">
          <label>Espèce* :
            <input type="radio" name="species" value="Chat" checked={this.state.species === 'Chat'} onChange={this.handleSpeciesChange}/>Chat
            <input type="radio" name="species" value="Chien" checked={this.state.species === 'Chien'} onChange={this.handleSpeciesChange}/>Chien
          </label>
          <br/><br/>
          <label>Nom :
            <input type="text" name="name" placeholder=""/>
          </label>
          <label> Race* :
            <input type="text" name="breed" placeholder=""/>
          </label>
          <br/><br/>
          <label>Âge moyen* :
            <select name="age" value={this.state.age} onChange={this.handleAgeChange}>
              <option value="adult">Adulte</option>
              <option value="baby">Bébé</option>
            </select>
          </label>
          <br/><br/>
          <label>Description :
            <input type="checkbox" name="affectionate" onChange={this.toggle}/>Affectueux
            <input type="checkbox" name="quiet" onClick={this.toggle}/>Calme
            <input type="checkbox" name="playful" onClick={this.toggle}/>Joueur
          </label>
          <br/><br/>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    );
  }

}

export default PetForm;
