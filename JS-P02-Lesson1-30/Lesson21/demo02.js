var arr = new Array(5)
console.log(arr)
console.log(arr.length)


var arr2 = [1,2,3]
console.log(arr2)
arr2.length = 5
console.log(arr2)

console.log("for in===============")
for (const index in arr2) {
    console.log(index)
}
console.log("for of===============")
for (const index of arr2) {
    console.log(index)
}