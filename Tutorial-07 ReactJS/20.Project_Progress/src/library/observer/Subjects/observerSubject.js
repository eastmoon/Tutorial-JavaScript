'use strict';

import Subject from '../subject';
import Observer from '../observer';

export default class ObserverSubject extends Subject {
  // Constructor
  constructor(_notificationName) {
    // Call parent constructor
    super(_notificationName);
    // private variable, not safe way.
    this.mTriggers = [];
  }

  // Static method

  // Method
  // register
  // @parame [source] : thisArg or Observer object. if thisArg, parame [method] can't be undefined. if Observer, parame [method] can be undefined.
  // @parame [method] : the method will call in observer.
  // @return : true, register success. false, register fail or parameter input wrong.
  // @function overloading :
  // register(thisArg, method)
  // register(Observer)
  register(_source, _method) {
    // declare variable.
    let source = null;
    // parameter type check.
    if(_method != null && typeof _method === "function") {
      source = new Observer(_source, _method);
    } else if(_source instanceof Observer) {
      source = _source;
    }
    // functional :
    // 1. Duplicate object could not register.
    if(source != null && this.has(source) < 0) {
      // 2. Add in container
      this.mTriggers.push(source);
      return true;
    }
    return false;
  }

  // remove
  // @parame [source] : thisArg or Observer object. if thisArg, parame [method] can't be undefined. if Observer, parame [method] can be undefined.
  // @parame [method] : the method will call in observer.
  // @return : true, remove success. false, remove fail or parameter input wrong.
  // @function overloading :
  // remove(thisArg, method)
  // remove(Observer)
  remove(_source, _method) {
    // declare variable.
    let source = null;
    let index = -1;
    // parameter type check.
    if(_method != null && typeof _method === "function") {
      source = new Observer(_source, _method);
    } else if(_source instanceof Observer) {
      source = _source;
    }
    // functional :
    // 1. Exist object than remove it.
    if(source != null && (index = this.has(source)) >= 0) {
      // 2. Remove in container.
      this.mTriggers.splice(index, 1);
      return true;
    }
    return false;
  }

  // retrieve
  // Take back Observer object.
  // @parame [source] : thisArg.
  // @parame [method] : the method will call in observer.
  // @return : Object, null is object not find in container.
  retrieve(_thisArg, _method) {
    // declare variable.
    let source = new Observer(_thisArg, _method);
    let index = -1;
    // functional :
    // 1. Exist object than return it.
    if((index = this.has(source)) >= 0) {
      return this.mTriggers[index];
    }
    return null;
  }

  // has
  // Check Observer object is exist in container, and return index. if object isn't Observer type and exist in container, return -1. If exist return index in container.
  // @parame [source] : Observer object.
  // @return : index, -1 is object not exist.
  has(_source) {
    // declare variable
    let index = -1;
    let i = 0;
    // functional :
    // 1. make sure _source is Observer object.
    if(_source instanceof Observer) {
      // Search object in container. If object is equal with source, than saving index and break for loop.
      for(i = 0; i < this.mTriggers.length; i++) {
        if(_source.equal(this.mTriggers[i])) {
          index = i;
          break;
        }
      }
    }
    return index;
  }

  // Nofity, override method.
  notify() {
    // Execute parent method.
    super.notify();
    // declare variable
    let i = 0;
    // functional :
    for(i = 0; i < this.mTriggers.length; i++) {
      this.mTriggers[i].notify.apply(this.mTriggers[i], arguments);
    }
  }


  // Accessor
  get count() {
    return this.mTriggers.length;
  }
}
