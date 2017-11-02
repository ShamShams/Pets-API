import React, { Component } from 'react';

class DogList extends Component {
  render() {
    const dogs = this.props.dogs.map((dog) =>
      <li>{dog.nom} est un {dog.race}, il a {dog.age} ans
        <a href={`http://localhost:3005/chiens/${dog._id}/delete`}><button>X</button></a>
      </li>
    );

    return (
      <div className="App">
        <ul>{dogs}</ul>
      </div>
    );
  }
}

export default DogList;
