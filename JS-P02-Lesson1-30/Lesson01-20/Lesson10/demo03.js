

function factorial(n){
    if ((n == 0) || (n == 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }

  
  var a, b, c, d, e;

a = factorial(1); // 1赋值给a
b = factorial(2); // 2赋值给b
c = factorial(3); // 6赋值给c
d = factorial(4); // 24赋值给d
e = factorial(5); // 120赋值给e

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)