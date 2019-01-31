var studentInfo = {
    name:"张三",
    sayHi:function(){
        return this.name
    }
}

var stu02 = {
    name:"李四"
}

stu02.sayHi = studentInfo.sayHi

console.log( studentInfo.sayHi() )
console.log( stu02.sayHi() )

var sayHi = studentInfo.sayHi

name = "王二麻子"
console.log(sayHi())