import React, { Component } from 'react';
import request from 'request';

import '../stylesheets/App.css';

import CatForm from './CatForm';
import CatList from './CatList';
import DogForm from './DogForm';
import DogList from './DogList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      dogs: []
    };
  }

  componentDidMount() {
    let catsUrl = 'http://localhost:3005/chats';
    let dogsUrl = 'http://localhost:3005/chiens';

    fetch(catsUrl)
      .then(res => res.json())
      .then(result => {
        this.setState({
          cats: result
        })
      })
      .catch((res, err) => res.send(err));

    fetch(dogsUrl)
      .then(res => res.json())
      .then(result => {
        this.setState({
          dogs: result
        })
      })
      .catch((res, err) => res.send(err));
  }

  render() {
    return (
      <div className="App">
        <CatForm />
        <CatList cats={this.state.cats}/>
        <DogForm />
        <DogList dogs={this.state.dogs}/>
      </div>
    );
  }
}

export default App;
