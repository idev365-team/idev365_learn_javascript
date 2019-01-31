const privates = new WeakMap();

function Public() {
  const me = {
    // Private data goes here
    name:"张三"
  };
  privates.set(this, me);
}

Public.prototype.sayHi = function () {
  const me = privates.get(this);
  // Do stuff with private data in `me`...
  console.log(me.name)
};


var pub = new Public()
pub.sayHi()