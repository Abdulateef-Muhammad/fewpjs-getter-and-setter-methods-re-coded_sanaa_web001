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

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  set circumference(circumference) {
    this.radius = circumference / (this._pi * 2);
  }

  set area(area) {
    this.radius = Math.sqrt(area / this._pi);
  }
}

let circle = new Circle(6);
circle.diameter = 38;
console.log(circle.radius);
