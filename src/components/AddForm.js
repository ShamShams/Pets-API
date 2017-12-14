import React, { Component } from 'react';
import { Title } from './';
import "../stylesheets/AddForm.css";

class AddForm extends Component {
  state = {
    species: 'Chat',
    age: 'Adulte',
    sex: 'Mâle',
    affectionate: false,
    quiet: false,
    playful: false
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value })
  }

  toggle = (event) => {
    const name = event.target.name;
    this.setState({ [name]: !this.state.name })
  }

  render() {
    return (
      <div className="AddForm">
        <form action="http://localhost:3005/pets/add" method="POST" encType="multipart/form-data">

          <Title title="Ajouter un animal"/>

          <label>Espèce : </label>
          <input type="radio" name="species" value="Chat" checked={this.state.species === 'Chat'} onChange={this.handleChange}/>Chat
          <input type="radio" name="species" value="Chien" checked={this.state.species === 'Chien'} onChange={this.handleChange}/>Chien
          <br/><br/>

          <label>Nom</label><br/>
          <input type="text" name="name"/><br/>

          <label>Race</label>
          <input type="text" name="breed"/><br/>

          <label>Âge</label>
          <select name="age" value={this.state.age} onChange={this.handleChange}>
            <option value="Adulte">Adulte</option>
            <option value="Bébé">Bébé</option>
          </select>

          <label>Sexe</label>
          <select name="sex" value={this.state.sex} onChange={this.handleChange}>
            <option value="Mâle">Mâle</option>
            <option value="Femelle">Femelle</option>
          </select><br/>

          <label>Caractère :</label>
          <input type="checkbox" name="character.affectionate" onChange={this.toggle}/>Affectueux
          <input type="checkbox" name="character.quiet" onClick={this.toggle}/>Calme
          <input type="checkbox" name="character.playful" onClick={this.toggle}/>Joueur <br/>

          <label>Description</label><br/>
          <textarea cols="40" rows="5" name="description"></textarea><br/>

          <label>Photo :</label>
          <input type="file" name="photo"/><br/>

          <label>Département et ville du refuge</label><br/>
          <input type="text" name="department" placeholder="Dpt"/>
          <input type="text" name="city" placeholder="Ville"/><br/>

          <label>Email</label>
          <input type="email" name="email" placeholder="exemple@exemple.fr"/><br/>

          <label>Numéro de téléphone :</label>
          <input type="text" name="phone" placeholder="0607080910"/><br/>

          <button type="submit">Enregistrer</button>

        </form>
      </div>
    );
  }

}

export default AddForm;
