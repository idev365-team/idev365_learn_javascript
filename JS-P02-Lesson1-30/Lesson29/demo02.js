// "use strict";

// var obj2 = {
//     get x(){
//         return 17;
//     }
// }

// console.log(obj2.x)
// obj2.x = 10
// console.log(obj2.x)


// 给不可扩展对象的新属性赋值
// var fixed = {};
// Object.preventExtensions(fixed);
// fixed.newProp = "ohai"; // 抛出TypeError错误


// delete Object.prototype

// function sum(a, a, c){ // !!! 语法错误
//     // "use strict";
//     console.log(a,a,c)
//     return a + a + c; // 代码运行到这里会出错
//   }


//   console.log(sum(1,2,3))


// var a = 0o644


// (function() {
//     "use strict";
    
//     false.true = "";              //TypeError
//     (14).sailing = "home";        //TypeError
//     "with".you = "far away";      //TypeError
    
//     })();


// var x = 17;
// var evalX = eval("'use strict'; var x = 42; x");
// console.assert(x === 17);
// console.assert(evalX === 42);



// var x;
// // delete x; // !!! 语法错误
// eval("'use strict';var y; delete y;"); // !!! 语法错误



"use strict";
// eval = 17;
// arguments++;
// ++eval;

// var obj = { set p(arguments) { } };
// var eval;
// try { } catch (arguments) { }
// function x(eval) { }
// function arguments() { }
// var y = function eval() { };
// var f = new Function("arguments", "'use strict'; return 17;");



// function f(a){
//     "use strict";
//     a = 42;
//     return [a, arguments[0]];
//   }
//   var pair = f(17);
//   console.assert(pair[0] === 42);
//   console.assert(pair[1] === 17);

// "use strict";
// var f = function() { return arguments.callee; };
// f(); // 抛出类型错误



// "use strict";
function fun() { return this; }
console.log(fun() === undefined);
console.log(fun.call(2) === 2);
console.log(fun.apply(null) === null);
console.log(fun.call(undefined) === undefined);
console.log(fun.bind(true)() === true);