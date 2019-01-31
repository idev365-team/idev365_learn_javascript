var str =`


Chap 06.15

这是本章节的内容01

这是本章节的内容02



THE-END

`
var result = str.split(/\s*\n\s*/)
console.log( result.slice(1,result.length-1) )