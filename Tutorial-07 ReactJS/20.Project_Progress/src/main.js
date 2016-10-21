'use strict';

import Observer from './library/observer/observer';
import Subject from './library/observer/subject';
import ObserverSubject from './library/observer/subjects/observerSubject';
import ReduxSubject from './library/observer/subjects/reduxSubject';
import MyClass from './myclass';
import MyReducer from './myreducer';
import { createStore } from 'redux';

/*
// Redux & ReduxSubject
// Declare reducer
var re = new MyReducer();
console.log(typeof re);
// Declare variable
var rs = new ReduxSubject("TestSubject", re.counter, 5);
var rf1 = function() {
  console.log("State : " + rs.state);
};
var rf2 = re.show.bind(re);

// Register
rs.register(rf1);
rs.register(rf2);

// notify
rs.notify({ type: 'INCREMENT' });
rs.notify({ type: 'INCREMENT' });
rs.notify({ type: 'DECREMENT' });
*/

/*
// Observer & ObserverSubject
// Declare variable.
console.log("Observer");
var a = function(v1, v2) {
  console.log(v1 * v2);
}
var c = new MyClass(5, 10);
var o = null;

// Call with function
o = new Observer(this, a);
o.notify(5, 10);

// Call with class method
o = new Observer(c, c.calculate);
o.notify(5, 10);

// Compare two observer
var f1 = new Observer(c, c.calculate);
var f2 = new Observer(c, c.calculate);
console.log(f1.equal(f2));

// Declare variable
var s = new ObserverSubject("TestSubject");
f1 = new Observer(this, a);
f2 = new Observer(c, c.calculate);
var unregister = new Observer(c, a);

// Register
console.log("Observer subject : register");
s.register(f1);
console.log(s.count);
s.register(f2);
console.log(s.count);

// Has
console.log("Observer subject : has");
console.log(s.has(f1));
console.log(s.has(f2));
console.log(s.has(unregister));

// retrieve
console.log("Observer subject : retrieve");
var t = s.retrieve(c, c.calculate);
console.log(t.target);
console.log(t.method);

// remove
console.log("Observer subject : remove");
s.remove(c, c.calculate);
console.log(s.count);
console.log(s.has(f2));

s.remove(f1);
console.log(s.count);
console.log(s.has(f1));

// Notify
console.log("Observer subject : notify");
s.register(f1);
s.register(f2);
s.notify(5, 10);
*/
