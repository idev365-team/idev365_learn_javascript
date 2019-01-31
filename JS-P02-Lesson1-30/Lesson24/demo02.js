function Employee () {
    this.dept = "general";
  }
  Employee.prototype.name = "";
  
  function WorkerBee () {
    this.projects = [];
  }
  WorkerBee.prototype = new Employee;
  
  var amy = new WorkerBee;
  
  Employee.prototype.name = "Unknown";

  console.log(amy)
  amy.name = "ABC"
  console.log(amy.name)
  delete amy.name
  console.log(amy.name)


  console.log(amy.__proto__ ===   WorkerBee.prototype )