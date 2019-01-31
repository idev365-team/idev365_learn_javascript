function Person() {
    // The Person() constructor defines `this` as itself.
    this.age = 0;
  
    setInterval( () =>{
      // In nonstrict mode, the growUp() function defines `this` 
      // as the global object, which is different from the `this`
      // defined by the Person() constructor.
      console.log(this)
      this.age++;
      console.log(this.age)
    }, 1000);
  }
  
  var p = new Person();