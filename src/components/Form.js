import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: 'Chat',
      age: 'Adulte',
      sex: 'Mâle',
      description: '',
      affectionate: false,
      quiet: false,
      playful: false,
      department: '',
      city: '',
      email: '',
      phone: ''
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value })
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
      <div className="Form">
        <p>Ajouter un animal:</p>
        <form action="http://localhost:3005/pets/add" method="POST" encType="multipart/form-data">
          <label>Espèce* :
            <input type="radio" name="species" value="Chat" checked={this.state.species === 'Chat'} onChange={this.handleChange}/>Chat
            <input type="radio" name="species" value="Chien" checked={this.state.species === 'Chien'} onChange={this.handleChange}/>Chien
          </label>
          <br/><br/>
          <label>Nom :
            <input type="text" name="name"/>
          </label>
          <label> Race :
            <input type="text" name="breed"/>
          </label>
          <br/><br/>
          <label> Âge :
            <select name="age" value={this.state.age} onChange={this.handleChange}>
              <option value="Adulte">Adulte</option>
              <option value="Bébé">Bébé</option>
            </select>
          </label>
          <label> Sexe :
            <select name="sex" value={this.state.sex} onChange={this.handleChange}>
              <option value="Mâle">Mâle</option>
              <option value="Femelle">Femelle</option>
            </select>
          </label>
          <br/><br/>
          <label>Caractère :
            <input type="checkbox" name="affectionate" onChange={this.toggle}/>Affectueux
            <input type="checkbox" name="quiet" onClick={this.toggle}/>Calme
            <input type="checkbox" name="playful" onClick={this.toggle}/>Joueur
          </label>
          <br/><br/>
          <label>Description :
            <textarea cols="40" rows="5" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
          </label>
          <br/><br/>
          <label> Photo :
            <input type="file" name="petPhoto"/>
          </label>
          <br/><br/>
          <label>Département et ville du refuge :
            <input type="text" name="department" value={this.state.department} onChange={this.handleChange} placeholder="Dpt"/>
            <input type="text" name="city" value={this.state.city} onChange={this.handleChange} placeholder="Ville"/>
          </label>
          <br/><br/>
          <label>Email :
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="exemple@exemple.fr"/>
          </label>
          <br/><br/>
          <label> Numéro de téléphone :
            <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="0607080910"/>
          </label>
          <br/><br/>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    );
  }

}

export default Form;
