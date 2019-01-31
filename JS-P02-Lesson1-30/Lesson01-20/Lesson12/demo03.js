

function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}



fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8