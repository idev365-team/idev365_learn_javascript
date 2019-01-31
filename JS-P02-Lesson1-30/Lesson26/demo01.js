function makeIterator(array){
    var nextIndex = 0
    return {
        next:function(){
            return nextIndex < array.length ?
                {value:array[nextIndex++],done:false} : {done:true}
        }
    }
}

let it = makeIterator(["cat","dog"])
let resutl;
while( !(result = it.next()).done  ){
    console.log(result)
}