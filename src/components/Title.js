import React, { Component } from 'react';

import '../stylesheets/Title.css';

class Title extends Component {

  render() {
    return (
      <div className="Title">
        <h1>{this.props.title}</h1>
      </div>
    );
  }

}

export default Title;
