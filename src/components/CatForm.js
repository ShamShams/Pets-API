import React, { Component } from 'react';

class CatForm extends Component {

  render() {
    return (
      <div>
        <p>Ajouter un chat:</p>
        <form action="http://localhost:3005/chats/add" method="POST">
          <input type="text" name="nom" placeholder="Nom"/>
          <input type="text" name="age" placeholder="Age"/>
          <input type="text" name="race" placeholder="Race"/><br/><br/>
          <span>Il est : </span><br/>
          <input type="checkbox" name="gentil"/>Gentil <br/>
          <input type="checkbox" name="calme"/>Calme <br/>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    );
  }

}

export default CatForm;
