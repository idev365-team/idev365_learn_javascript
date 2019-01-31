// console.log( /abc/.test("hello,abc") )



// let str = 'hello world!';
// let result = /^hello/.test(str);
// console.log(result);

// function testinput(re, str){
//     var midstring;
//     if (re.test(str)) {
//         midstring = " contains ";
//     } else {
//         midstring = " does not contain ";
//     }
//     console.log(str + midstring + re.source);
// }

// testinput(/\d+/,"hello")


var regex = /foo/g;

console.log(regex.lastIndex)
// regex.lastIndex is at 0
console.log( regex.test('foo') );

console.log(regex.lastIndex)
// regex.lastIndex is now at 3
console.log(  regex.test('fooabcfoo') ); // false