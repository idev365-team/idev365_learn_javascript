function wait(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve()
        },2000);
    })
}

var co = function(cb){
    return function(){
        return new Promise(function(resolve){
            
            resolve(cb())
        })
    }
}


var func1 = co(function(){
    console.log("call fun1")
    return 1
})

var func2 =  co(function(){
    console.log("call fun2")
    return 2
})


// [wait,func1,func2].reduce((p,f)=>p.then(f),Promise.resolve())


// async function test(){
//     for (let f of [wait,func1,wait, func2]) {
//         await f();
//     }
// }

// test()



// Promise.resolve().then(() => console.log(2)).then(() => console.log(3));


Promise.all([func1, wait, func2]).then(function(values) {
    console.log(values);
  });


// Promise.resolve()
// .then(wait)
// .then(co(function(){
//     console.log("1111")
// }))
// .then(wait)
// .then(co(function(){
//     console.log("1111")
// }))

