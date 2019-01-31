function isNumber(value){
    return typeof value == 'number';
  }
  var a1 = [1, 2, 3];
  console.log(a1.every(isNumber)); // logs true
  var a2 = [1, '2', 3];
  console.log(a2.every(isNumber)); // logs false

  