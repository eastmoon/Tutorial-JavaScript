'use strict';

import Subject from '../subject'
import Observer from '../observer';
import { createStore } from 'redux';

/**
 * Reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

let reduxSubjectMap = [];
export default class ReduxSubject extends Subject {
  // Constructor
  constructor(_notificationName, _reducer, _state) {
    // Call parent constructor
    super(_notificationName);
    // private variable, not safe way.

    // Create a Redux store holding the state of your app.
    // Its API is { subscribe, dispatch, getState }.
    // Reference : createStore(reducer, [preloadedState], [enhancer])
    this.mStore = createStore(_reducer, _state);
    // Saving itself in global container.
    if(reduxSubjectMap != null)
      reduxSubjectMap.push({key:_notificationName, value:this});
  }

  // Static method

  // Retrieve object by notification Name, if have the same notification Name, only retrieve first push in container.
  static retrieve(_notificationName) {
    if(reduxSubjectMap != null) {
      // declare variable
      var i = 0;
      var o = null;
      // functional :
      for(i = 0; i < reduxSubjectMap.length; i++) {
        o = reduxSubjectMap[i];
        if(o != null && o.key === _notificationName) {
          return o.value;
        }
      }
    }
    return null;
  }

  // Method
  // Register
  register(_method) {
    return this.mStore.subscribe(_method);
  }

  // Finalize, call this method to close all releationship with it.
  finalize() {
    // declare variable
    var i = 0;
    var o = null;
    // functional :
    // Remove itself in global container.
    for(i = 0; i < reduxSubjectMap.length; i++) {
      o = reduxSubjectMap[i];
      if(o != null && o.key === this.notificationName) {
        reduxSubjectMap.splice(i, 1);
        break;
      }
    }
    // Remove link with store
    this.mStore = null;
  }

  // Nofity, override method.
  notify() {
    // Execute parent method.
    super.notify();
    // declare variable
    // functional :
    this.mStore.dispatch.apply(null, arguments);
  }

  // Accessor
  get store() {return this.mStore;}
  get state() {return this.mStore.getState();}
}
