'use strict';

import ReduxSubject from './library/observer/subjects/reduxSubject';

export default class MyClass {
  // Constructor
  constructor(var1, var2) {
    // private variable, not safe way.
    this.mVar1 = var1;
    this.mVar2 = var2;
  }

  // Static method

  // Method
  calculate(var3) {
    console.log(this.mVar1 + this.mVar2 + var3 );
  }

  show() {
      console.log("Show : " + ReduxSubject.retrieve("TestSubject").state);
  }
  // Accessor
}
