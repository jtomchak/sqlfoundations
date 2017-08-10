autoscale: true
# Classes
```javascript
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

---

```javascript
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toStringColor() {
        return super.toString() + ' in ' + this.color;
    }
}

const brightRedDot = new ColorPoint(5, 10, 'red');
brightRedDot.toStringColor(); // (5, 10) in red
brightRedDot.toString(); // (5, 10)
```

---

## There are two kinds of classes:

1. Point is a base class, because it doesn’t have an extends clause.
2. ColorPoint is a derived class.

---

## There are two ways of using super:

1. A class constructor (the pseudo-method constructor in a class definition) uses it like a function call (super(···)), in order to make a superconstructor call (line A).

2. Method definitions (in object literals or classes, with or without static) use it like property references (super.prop) or method calls (super.method(···)), in order to refer to superproperties (line B).

---

# The prototype chain of a subclass **is** pointed directly at the superclass / base in ECMAScript 2015:

---

> I favor composition over inheritance:

* Composition - Functionality of an object is made up of an aggregate of different classes by containing instances of other objects.
* Inheritance - Functionality of an object is made up of it's own functionality plus functionality from its parent classes.

---

# Challage
```javascript
class Employee {
  constructor(firstName, familyName) {
    this._firstName = firstName;
    this._familyName = familyName;
  }

  getFullName() {
    return `${this._firstName} ${this._familyName}`;
  }
}

class Manager {
  constructor(firstName, familyName) {
    this._firstName = firstName;
    this._familyName = familyName;
    this._managedEmployees = [];
  }

  getFullName() {
    return `${this._firstName} ${this._familyName}`;
  }

  addEmployee(employee) {
    this._managedEmployees.push(employee);
  }
}
```

---

