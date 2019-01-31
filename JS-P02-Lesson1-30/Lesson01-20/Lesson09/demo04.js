console.log("before markLoop")
markLoop: while (true) {
   console.log("in while ...")
   break markLoop;
}
console.log("after markLoop")

// var num = 0;  
// 　　outPoint:  
// 　　for(var i = 0; i < 10; i++)  
// 　　{  
//    　　for(var j = 0; j < 10; j++)  
//     　　{  
//         　　if(i == 5 && j == 5)  
//         　　{  
//             　　continue outPoint;  
//        　　 } 
//             console.log("i=",i,"\tj=",j)
//        　　 num++;  
//     　　}  
// 　　}  
// console.log(num);  //95