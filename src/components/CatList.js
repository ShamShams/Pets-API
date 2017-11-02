import React, { Component } from 'react';

class CatList extends Component {
  render() {
    const cats = this.props.cats.map(cat =>
      <li>{cat.nom} est un {cat.race}, il a {cat.age} ans
        <a href={`http://localhost:3005/chats/${cat._id}/delete`}><button>X</button></a>
      </li>
    );

    return (
      <div className="App">
        <ul>{cats}</ul>
      </div>
    );
  }
}

export default CatList;
