'use strict';

import React from 'react';
import TextField from './components/textFields/textField';

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
        <TextField />
      </div>
    );
  }
  // Accessor
}
