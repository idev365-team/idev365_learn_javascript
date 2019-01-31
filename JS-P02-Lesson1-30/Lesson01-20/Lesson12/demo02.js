function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }

  console.log(addSquares(2, 3)); // returns 13
  console.log(addSquares(3, 4)); // returns 25
  console.log(addSquares(4, 5)); // returns 41