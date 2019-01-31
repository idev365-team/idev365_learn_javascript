// function multiply(multiplier, ...theArgs) {
//     return theArgs.map(x => multiplier * x);
// }

// var arr = multiply(2, 1, 2, 3);
// console.log(arr); // [2, 4, 6]


// function sayHi(a,b,c,...reset){
    // console.log(a)
    // console.log(b)
    // console.log(c)
    // console.log(reset)
// }

// sayHi("Jimmy","Colin","Tom",1,2,3,"Hello","ABC",true,false)




function sayHi(a,b,c){
    let reset = []
    for(let i=3;i<arguments.length;i++){
        reset.push(arguments[i])
    }

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(reset)
}

sayHi("Jimmy","Colin","Tom",1,2,3,"Hello","ABC",true,false)