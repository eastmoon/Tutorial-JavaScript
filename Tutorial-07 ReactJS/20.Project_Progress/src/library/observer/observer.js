'use strict';

export default class Observer {
  // Constructor
  constructor(_thisArg, _method) {
    // private variable, not safe way.
    this.mTarget = null;
    this.mMethod = null;
    if(typeof _method === "function") {
      this.mTarget = _thisArg;
      this.mMethod = _method;
    }
  }

  // Static method

  // Method
  // equal
  equal(_observer) {
    // Method can't undefined.
    if(_observer.method == null && this.method == null)
      return false;
    // check observer is equal or not.
    if(_observer.target === this.target && _observer.method.name === this.method.name)
      return true;
    return false;
  }
  // notify
  notify() {
    if(this.mMethod != null) {
      this.mMethod.apply(this.mTarget, arguments);
    }
  }

  // Accessor
  get target() {return this.mTarget;}
  get method() {return this.mMethod;}
}
