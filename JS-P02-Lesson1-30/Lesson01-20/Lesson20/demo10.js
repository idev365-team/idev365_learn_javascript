// 下面这个姓名字符串包含了多个空格和制表符，
// 且在姓和名之间可能有多个空格和制表符。
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- Original String\n", names + "\n"];

// 准备两个模式的正则表达式放进数组里。
// 分割该字符串放进数组里。

// 匹配模式：匹配一个分号及紧接其前后所有可能出现的连续的不可见符号。
var pattern = /\s*;\s*/;

// 把通过上述匹配模式分割的字符串放进一个叫做nameList的数组里面。
var nameList = names.split(pattern);

// 新建一个匹配模式：匹配一个或多个连续的不可见字符及其前后紧接着由
// 一个或多个连续的基本拉丁字母表中的字母、数字和下划线组成的字符串
// 用一对圆括号来捕获该模式中的一部分匹配结果。
// 捕获的结果稍后会用到。
pattern = /(\w+)\s+(\w+)/;

// 新建一个数组 bySurnameList 用来临时存放正在处理的名字。
var bySurnameList = [];

// 输出 nameList 的元素并且把 nameList 里的名字
// 用逗号接空格的模式把姓和名分割开来然后存放进数组 bySurnameList 中。
//
// 下面的这个替换方法把 nameList 里的元素用 $2, $1 的模式
// （第二个捕获的匹配结果紧接着一个逗号一个空格然后紧接着第一个捕获的匹配结果）替换了
// 变量 $1 和变量 $2 是上面所捕获的匹配结果。

output.push("---------- After Split by Regular Expression");

var i, len;
for (i = 0, len = nameList.length; i < len; i++){
  output.push(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}

// 输出新的数组
output.push("---------- Names Reversed");
for (i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

// 根据姓来排序，然后输出排序后的数组。
bySurnameList.sort();
output.push("---------- Sorted");
for (i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.join("\n"));