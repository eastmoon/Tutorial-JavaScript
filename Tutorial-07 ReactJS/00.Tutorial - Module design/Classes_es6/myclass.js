'use strict';

export default class MyClass {
  // Constructor
  constructor(var1, var2) {
    // private variable, not safe way.
    this.mVar1 = var1;
    this.mVar2 = var2;
  }

  // Static method
  static addation(var1, var2) {
    return var1 + var2;
  }

  // Method
  calculate() {return this.mVar1 * this.mVar2;}

  // Accessor
  get var1() {return this.mVar1;}
  set var2(value) {this.mVar2 = value;}
}
