function myConcat(separator) {
    var result = ''; // 把值初始化成一个字符串，这样就可以用来保存字符串了！！
    var i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
    }
    return result;
 }

console.log(myConcat("-",1,2,3,4))
console.log( myConcat(", ", "red", "orange", "blue") ); 
