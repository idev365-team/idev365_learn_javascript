"use strict";

var obj1 = {}

Object.defineProperty(obj1,"x",{value:42,writable:false})
obj1.x = 9;

console.log(obj1.x)