'use strict';

import React from 'react';

// SASS import
require("../styles/button.sass");

export default class Button extends React.Component {

  // Constructor
  constructor() {
    super();
    this.state = {
      count : 0
    };

    // React components using ES6 classes no longer autobind this to non React methods.
    // Any method need use this, need bind in constructor.
    this.onClickEvent = this.onClickEvent.bind(this);
  }

  // Static method

  // Method
  onClickEvent() {
    console.log("Click button");
    this.state.count++;
    this.setState(this.state);
  }

  render() {
    return (
      <div className="buttonStyle" onClick={this.onClickEvent}>Button {this.state.count} !!</div>
    );
  }
  // Accessor
}
