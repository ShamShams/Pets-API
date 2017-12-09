import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { List, Form, Title, Navbar } from './';

import '../stylesheets/App.css';

class App extends Component {
  state = {
    pets: []
  };

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
      <Router>
        <div className="container">
          <Navbar/>
          <Route exact path="/" render={() => <List pets={this.state.pets}/>} />
          <Route path="/animaux" render={() => <List pets={this.state.pets}/>} />
          <Route path="/ajouter" component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;
