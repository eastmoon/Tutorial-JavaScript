'use strict';

import React from 'react';
import Button from './components/button';
//
export default class Application extends React.Component {
  // Constructor
  constructor() {
    super();
  }

  // Static method

  // Method
  render() {
    return (
      <div>
        <h2>Hello world React app !!!</h2>
        <div><Button /><Button /></div>
      </div>
    );
  }
  // Accessor
}
