'use strict';

import Observer from './observer';

export default class Subject {
  // Constructor
  constructor(_notificationName) {
    // private variable, not safe way.
    this.mName = _notificationName;
  }

  // Static method

  // Method

  // notify
  notify() {
  }

  // Accessor
  get notificationName() {
    return this.mName;
  }
}
