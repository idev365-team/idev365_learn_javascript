function* idMaker(maxCount){
    var index = 0;
    while(index<=maxCount){
        yield index++;
    }
}

var gen = idMaker(10)
// var result
// while( !(result=gen.next()).done ){
//     console.log(result)    
// }


for(var i of gen){
    console.log(i)    
}