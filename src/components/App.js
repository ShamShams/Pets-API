import React, { Component } from 'react';
import request from 'request';

import '../stylesheets/App.css';

import List from './List';

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
    request(catsUrl, (err, res, body) => {
      console.log(body);
      if (err) res.send(err);
      this.setState({
        cats: JSON.parse(body)
      })
    });
    request(dogsUrl, (err, res, body) => {
      console.log(body);
      if (err) res.send(err);
      this.setState({
        dogs: JSON.parse(body)
      })
    });
  }

  render() {
    const cats = this.state.cats;
    const dogs = this.state.dogs;

    return (
      <div className="App">
        <List pets={cats}/>
        <List pets={dogs}/>
      </div>
    );
  }
}

export default App;
