import React from 'react';
import '../stylesheets/Title.css';

export const Title = (props) => {
  return (
    <div className="Title">
      <h3>{props.title}</h3>
    </div>
  );
}
