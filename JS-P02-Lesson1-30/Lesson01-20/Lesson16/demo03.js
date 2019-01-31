// var a = [1,2,3]
// var b = [4,5,...a,6]
// console.log(b)


function print(){
    console.log(...arguments)
}


print(1,2,3)
print("Hello",1,2,3)


function test(a,b,c,...rest){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(...rest)
}

test(1,2,3,4,5,6)