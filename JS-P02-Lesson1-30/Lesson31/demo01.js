const s = new Date().getSeconds();

setTimeout(function() {
  // 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 0);

while(true) {
  if(new Date().getSeconds() - s >= 3) {
    console.log("Good, looped for 3 seconds");
    break;
  }
}

