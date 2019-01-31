// var x = 0;
// while (x < 10) { // "x < 10" 是循环条件
//    // do stuff
//    console.log(x)
//    x++;
// }


function loop(x){
    if(x>=10)return;
    console.log(x)
    loop(x+1)
}

loop(0)