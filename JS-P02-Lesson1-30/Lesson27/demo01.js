let handler = {
    get:function(target,name){
        // console.log("target:",target)
        // console.log("name:",name)
        if(target.hasOwnProperty(name)){
            return target[name]
        }else{
            console.warn("没有找到你要的属性:"+name)
            return 
        }
    },
    set:function(target,name,value){
        target[name] = "#"+value
    },
    deleteProperty:function(target,name){
        console.log(target,"删除属性",name)
        delete target[name]
    },
    enumerate:function(a,b,c){
        console.log("enumerate->",a,b,c)
    }
}

var p = new Proxy({},handler)

p.a = 1
p.abc = "abc"
// delete p.abc

// // console.log(p.a)
// // console.log(p.abc)
// // console.log(p.sayHi)


for(let i in p){
    console.log("p->",i)
}