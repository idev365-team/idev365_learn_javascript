function map(f,a) {
    var result = [],i; //创建一个新数组
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
}



let result = map(
        function(item){ 
            return item+5; 
        },  
        [1,2,3]  )

console.log(result)


let stu = {
    sayHi:function(){}
}


