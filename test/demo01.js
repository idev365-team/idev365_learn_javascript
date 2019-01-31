var foo = "bar";

function bar(){
    console.log(foo)
    var foo = "baz";
}

// function bar(foo){
//     foo = "bam";
//     bam = "yay";
// }

bar()