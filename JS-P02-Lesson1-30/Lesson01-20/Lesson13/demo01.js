function test(){
    console.log(arguments)
    console.log(arguments.length)
}

test()
test(1)
test(1,2,3)
test(["Hello","Colin"])