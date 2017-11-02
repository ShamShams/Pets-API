import React, { Component } from 'react';

class DogForm extends Component {

  render() {
    return (
      <div>
        <p>Ajouter un chien:</p>
        <form action="http://localhost:3005/chiens/add" method="POST">
          <input type="text" name="nom" placeholder="Nom"/>
          <input type="text" name="age" placeholder="Age"/>
          <input type="text" name="race" placeholder="Race"/>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    );
  }

}

export default DogForm;
