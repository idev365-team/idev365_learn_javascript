function sayHi(){
    console.log("Hi,山地人")
}

function square(number){
    return number*number;
}

// console.log( square(3) )


let count = 0



function grow(count){
    return ++count
}

// console.log(grow(count))
// console.log(count)


function myFunc(theObject){
    theObject.make = "Toyota"
}

var mycar = { make:"Honda",model:"Accord",year:1998}
// myFunc(mycar)
// console.log(mycar)

var square2 = square1 = function funA(number){
    if(number>0){
        console.log("funA",number,funA(number-1))
    }
     return number*number;
}

console.log("square1",square1(3))
// console.log("square2",square2(3))
