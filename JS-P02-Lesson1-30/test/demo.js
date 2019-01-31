function a(){
    console.log("全局作用域下的 a被调用")
}

(function(){
    if(false){
        function a ( ){
            console.log("function() 中的 a被调用")
        }
    }
    a()

})()

