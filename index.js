// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
    this._pi = Math.PI;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return this._pi * this.radius * 2;
  }
  get area() {
    console.log(this._pi);
    return this._pi * Math.pow(this.radius, 2);
  }

  set diameter(radius) {
    this.diameter = radius * 2;
  }

  set circumference(radius) {
    this.radius = radius;
    this.circumference = this._pi * this.radius * 2;
  }

  set area(radius) {
    this.radius = radius;
    this.area = this._pi * Math.pow(radius, 2);
  }
}

let circle = new Circle(6);
circle.diameter = 38;
console.log(circle.radius);
