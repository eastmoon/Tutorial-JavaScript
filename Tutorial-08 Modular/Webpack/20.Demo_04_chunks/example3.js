var a = require('./a');
a.sayHello();


require.ensure(['./b'], function(require){
    var b = require('./b');
    b.sayHello();
});
