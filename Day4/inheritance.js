//
// Shape class
//
class Shape {
  constructor(x, y) {
    this.setPosition(x, y);
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    var txt = "\n";
    for (var i in this) {
      if (this.hasOwnProperty(i)) {
        txt += "\t" + i + ": " + this[i] + "\n";
      }
    }
    return txt + "\n";
  }
}

//
// Circle class
//
class Circle extends Shape {
  constructor(x, y, r) {
    super(x, y);
    this.setRadius(r);
  }
  setRadius(r) {
    this.r = r;
  }
}

//
// Examples
//
var s1 = new Shape(10, 20); //=> { x: 10, y: 20 }
var s2 = new Shape(50, 60); //=> { x: 50, y: 60 }
s2.setPosition(30, 40); //=> { x: 30, y: 40 }

var c1 = new Circle(20, 10, 30); //=> { x: 20, y: 10, r: 30 }
c1.setPosition(30, 40); //=> { x: 30, y: 40, r: 30 }
c1.setRadius(80); //=> { x: 30, y: 40, r: 80 }
