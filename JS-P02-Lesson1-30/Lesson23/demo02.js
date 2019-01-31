function ParentClass(name) {
    this.name = name;
}
ParentClass.prototype.inheritedMethod = function() {};

function ChildClass(name) {
    ParentClass.call(this,name)
  this.prop = 5;
  this.method = function() {};
}

ChildClass.prototype = Object.create(ParentClass.prototype);
ChildClass.prototype.constructor = ChildClass;

console.log(
  Object.getOwnPropertyNames(
    new ChildClass("Colin")  // ["prop", "method"]
  )
);


