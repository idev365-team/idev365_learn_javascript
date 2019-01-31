

Array.prototype.myJoin = function(joinMark){
    let array = this;
    let result = ""
    for(let i=0;i<array.length;i++){
        
        result += array[i]
        if(i<array.length-1){
            result += joinMark
        }
    }
    return result
}

// myJoin([1,2,3],"*")