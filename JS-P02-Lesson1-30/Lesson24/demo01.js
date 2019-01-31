function Employee(name,dept){
    this.name = name || "";
    this.dept = dept || "general";
}

Employee.prototype.specialty = "none"

function Manager(){
    Employee.call(this)
    this.reports = []
}

Manager.prototype = Object.create(Employee.prototype)
Manager.prototype.constructor = Manager

function WorkerBee(name,dept,projs){
    this.base = Employee
    this.base(name,dept)
    this.projects = projs || []
}
WorkerBee.prototype = Object.create(Employee.prototype)
WorkerBee.prototype.constructor = WorkerBee


function SalesPerson(){
    WorkerBee.call(this)
    this.dept = "sales"
    this.quota = 100
}

SalesPerson.prototype = Object.create(WorkerBee.prototype)
SalesPerson.prototype.constructor = SalesPerson

function Engineer(name,projs,mach){
    this.base = WorkerBee;
    this.base(name,"engineering",projs)
    // WorkerBee.call(this)
    this.machine = mach || ""
}

Engineer.prototype = Object.create(WorkerBee.prototype)
// Engineer.prototype.constructor = Engineer
Engineer.prototype.specialty = "abc"

var engineer = new Engineer("Jimmy",["office"],"macOS")
// var sale = new SalesPerson()
console.log(engineer)
console.log(engineer.dept)
console.log(engineer.specialty)
// console.log(sale)

