var regObj = /abc/g;
console.log(regObj);
// console.log( regObj.match("hello,abc") );

var str = "hello,abc,hi,abc";

console.log( regObj.test(str) );

console.log( "str.match(regObj):",str.match(regObj) );
console.log( "str.search(regObj):",str.search(regObj) );
console.log( "str.search(regObj):",str.search(regObj) );


console.log( "regObj.exec(str):",regObj.exec(str) );
console.log( "regObj.exec(str):",regObj.exec(str) );



