var promise1 = Promise.resolve(3);
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 2000, 'bar');
  });
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, 'foo');
});

Promise.race([promise1, promise2, promise3]).then(function(values) {
  console.log("sucess->",values);
}).catch((a,b,c)=>{
    console.log(a,b,c)
});