'use strict';

import React from 'react';

// CSS
// Style in JS
// Reference : https://facebook.github.io/react/docs/dom-elements.html
let buttonStyle = {
  backgroundColor: '#4CAF50',
  border: '1px solid green',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  cursor: 'pointer'
}

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
      <div style={buttonStyle} onClick={this.onClickEvent}>Button {this.state.count} !!</div>
    );
  }
  // Accessor
}
