var revocable = Proxy.revocable({}, {
    get: function(target, name) {
      return "[[" + name + "]]";
    }
  });
  var proxy = revocable.proxy;
  console.log(proxy.foo); // "[[foo]]"
  
  revocable.revoke();
  
//   console.log(proxy.foo); // TypeError is thrown
//   proxy.foo = 1           // TypeError again
//   delete proxy.foo;       // still TypeError
  typeof proxy            // "object", typeof doesn't trigger any trap