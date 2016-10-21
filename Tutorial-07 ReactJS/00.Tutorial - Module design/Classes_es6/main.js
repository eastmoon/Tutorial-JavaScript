'use strict';

import MyClass from './myclass';

// new class
// static class method
var o = new MyClass(MyClass.addation(1, 2), 5);

// undefined, can't access private variable
console.log(o.mVar1);
// accessor attribute, take bake variable in object.
console.log(o.var1);
// accessor attribute, set value by setter.
o.var2 = 10;
// public function
console.log(o.calculate());
