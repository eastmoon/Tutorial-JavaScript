'use strict';

import React from 'react';
import TextField from './components/textField';
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
        <TextField />
        <p />
        <div>
          <Button />
          <Button />
        </div>
      </div>
    );
  }
  // Accessor
}
