var d = Date.prototype;
Object.defineProperty(d, "year", {
    get: function() { return this.getFullYear() },
    set: function(y) { this.setFullYear(y) }
  });

Object.defineProperty(d, "mins", {
get: function() { return this.getMinutes() },
set: function(mins) { this.setMinutes(mins) }
});


var now = new Date()
console.log(now.year)
console.log(now)
now.year = 2018
console.log(now.year)
console.log(now)

console.log(now.mins)
now.mins = 0
console.log(now.mins)