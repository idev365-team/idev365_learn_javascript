var regObj = /abc/

var str = "Chap 06.15"
console.log( str.replace(/(Chap).(\d+)\.(\d+)/,"第$2章 第$3节") )


