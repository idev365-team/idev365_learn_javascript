// function multiply(a, b) {
//     a = (typeof a !== 'undefined') ? a : 1;
//     b = (typeof b !== 'undefined') ?  b : 1;
//     return a*b;
// }


function multiply(a=1,b=1){
    return a*b
}
  
console.log( multiply() ); 
console.log( multiply(5) ); 
console.log( multiply(5,2) ); 