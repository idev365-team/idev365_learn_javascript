var o = {
    a: 7,
    get b() { 
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2
    }
  };
  
  console.log(o.a); // 7
  console.log(o.b); // 8
  o.c = 50;
  console.log(o.a); // 25