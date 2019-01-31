function displayCar() {
    var result = "A Beautiful " + this.year + " " + this.make
      + " " + this.model;
    console.log(result);
  }

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.displayCar = displayCar;
  }

var p1 = {
    name:"张三",
    age:36,
}
var car = new Car("上海","通用",2000,p1)
console.log(car)
console.log(car.displayCar())
