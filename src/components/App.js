import React, { Component } from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';

// Components
import Form from './Form';
import List from './List';

import '../stylesheets/App.css';

class App extends Component {
  state = {
    pets: [],
    open: false
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
      <div>
        <Form />
        <List pets={this.state.pets}/>
      </div>
    );
  }
}

export default App;






{/*      <Router>
  <div className="App">
  <nav>
  <ul>
  <li><Link to="/pets">Nos animaux</Link></li>
  <li><Link to="/add">Ajouter un animal</Link></li>
  </ul>
  </nav>

  <Switch>
  <Route path="/add" component={Form}/>
  <Route path="/pets" component={List}/>
  <Route path="/" component={List}/>
  </Switch>
  </div>
  </Router> */}
