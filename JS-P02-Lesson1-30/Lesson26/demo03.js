var myIt = {}

myIt[Symbol.iterator] = function *(){
    yield 1;
    yield 2;
    yield 3;
}

// for(let value of myIt){
//     console.log(value)
// }


a=new Map()
a.set("a",1)
a.set("b",2)
a.set("c",3)
a.set("d",4)
// console.log(myIt[Symbol.iterator].next())
var genMap = a[Symbol.iterator]()
console.log(genMap.next())
console.log(genMap.next())
console.log(genMap.next())
console.log(genMap.next())
console.log(genMap.next())
console.log(genMap.next())


// function* gen() {
//     yield* ['a', 'b', 'c'];
//   }

//   var gen01 = gen()
//   console.log(gen01.next())
//   console.log(gen01.next())
//   console.log(gen01.next())
//   console.log(gen01.next())





