import React, { Component } from 'react';

import Form from './Form';
import List from './List';

import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
    };
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
      .catch((res, err) => res.send(err));
  }

  render() {
    return (
      <div className="App">
        <Form />
        <List pets={this.state.pets}/>
      </div>
    );
  }
}

export default App;
