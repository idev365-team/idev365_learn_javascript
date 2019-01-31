var s1 = "2 + 2"; // Creates a string literal value
var s2 = new String("2 + 2"); // Creates a String object
console.log( eval(s1) ); // Returns the number 4
console.log( eval(s2) ); // Returns the string "2 + 2"

var count = 0;
var test = `
<html>
    <body>
        ${count}
        ${count>0?"有货":"暂时缺货"}
    </body>
</html>
`

console.log(test)