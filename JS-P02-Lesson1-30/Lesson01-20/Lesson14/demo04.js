function Person() {
    // The Person() constructor defines `this` as itself.
    var self = this;
    self.age = 0;
  
    setInterval( function() {
      // In nonstrict mode, the growUp() function defines `this` 
      // as the global object, which is different from the `this`
      // defined by the Person() constructor.
      self.age++;
      console.log(self.age)
    }, 1000);
  }
  
  var p = new Person();