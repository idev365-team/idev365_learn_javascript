var a=new Array(100000).join("*");

a=new Date()

function gen(a){
    return {
        reset:function(){
            a="";
        },
        grow:function(){
            return a+=new Array(100000).join("*");
        }
    }
}