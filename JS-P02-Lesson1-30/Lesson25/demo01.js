function wait(ms){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(ms)
        },ms);
    })
}

console.log("开始计时")
// wait(1000)
// .then((ms)=>{
//     console.log(`1已等待${ms}毫秒`)
//     throw new Error("我异常了")
// })
// .catch(err=>{
//     console.log("捕获异常 err",err)
//     return Promise.resolve(1200)
// })
// .then((ms)=>{
//     console.log(`2已等待${ms}毫秒`)
//     return wait(ms)
// })
// .then((ms)=>{
//     console.log(`3已等待${ms}毫秒`)
//     return wait(ms)
// })
// .then((ms)=>{
//     console.log(`4已等待${ms}毫秒`)
//     return wait(ms)
// })


async function run(){
    let ms = await wait(1000)
    console.log(`1已等待${ms}毫秒`)
    ms = await wait(ms*1.2)
    console.log(`2已等待${ms}毫秒`)
    ms = await wait(ms*1.2)
    console.log(`3已等待${ms}毫秒`)
    ms = await wait(ms*1.2)
    console.log(`4已等待${ms}毫秒`)  
}

async function test(){
    console.log("abc")
    await run()
    console.log("123")
}
test()



// function waitCallback(ms,callback){
//     setTimeout(function(){
//         callback(ms)
//     },ms);
// }

// waitCallback(1000,function(ms){
//     console.log(`1已等待${ms}毫秒`)
//     waitCallback(ms,function(ms){
//         console.log(`2已等待${ms}毫秒`)
//         waitCallback(ms,function(ms){
//             console.log(`3已等待${ms}毫秒`)
//             waitCallback(ms,function(ms){
//                 console.log(`4已等待${ms}毫秒`)
                
//             })
//         })
//     })
// })