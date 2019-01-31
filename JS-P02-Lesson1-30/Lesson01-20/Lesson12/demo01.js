function createGenId(start){
    var id = 0;
    return function grow(){
        var b = 12;
        id++;
        return start+ id-1;
    }
}

let genId = createGenId(10)



console.log(genId())
console.log(genId())
console.log(genId())
console.log(genId())