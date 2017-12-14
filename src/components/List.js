import React, { Component } from 'react';
import { Title, Card } from "./";

import '../stylesheets/List.css';

class List extends Component {
  state = {
    pets: []
  }

  componentDidMount() {
    let petsUrl = 'http://localhost:3005/pets';

    fetch(petsUrl)
      .then(res => res.json())
      .then(result => {
        this.setState({
          pets: result
        })
      })
      .catch((res, err) => console.log(err));
  }

  render() {
    return (
      <div className="List">
        <div className="List-header">
          <Title title="Nos animaux"/>
        </div>
        <div className="List-container">
          {this.state.pets.map((pet, i) => <Card key={i} {...pet} />)}
        </div>
      </div>
    );
  }
}

export default List;
