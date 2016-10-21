'use strict';

import ReduxSubject from './library/observer/subjects/reduxSubject';

export default class MyReducer {
  // Constructor
  constructor() {
    // private variable, not safe way.
  }

  // Static method

  // Method
  counter(state = 0, action) {
    switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
    }
  }

  show() {
      console.log("Show : " + ReduxSubject.retrieve("TestSubject").state);
  }
  // Accessor
}
