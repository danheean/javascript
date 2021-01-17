'use strict';
// 6. class
// Object-priented programming
// class: template
// object: instance of a clas
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance
// procedure

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age)
  {
    // fields;
    this.name = name;
    this.age = age;
  }

  // methods
  speak()
  {
    console.log(`${this.name}: hello!`);
  }
} 

const jurepi = new Person('jurepi', 20);
console.log(jurepi);
console.log(jurepi.name);
console.log(jurepi.age);
jurepi.speak()

// 2. Getter and setters
class User {

  constructor(firstName, lastName, age)
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age (value)
  {
    // if (value<0)
    // {
    //   throw Error('age can not be negative');
    // }


    // this._age = value;
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!, <- Babel
// https://developer.mozilla.ort/en-US/docs/Web/JavaScript/Reference

// class Experiment {
//   publicField = 2;
//   #privateField = 0;
// }

// const experiment = new Experiment();
// console.log(experiment.publicField);
// console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber)
  {
    this.articleNumber = articleNumber;
  }

  static printPublisher()
  {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape 
{
  constructor(width, height, color)
  {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea()
  {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape
 {
  draw()
  {
    super.draw();
    console.log('세모');
  }

  getArea()
  {
    return (this.width * this.height)/2
  }

  toString()
  {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();

// 6. Clas checking: instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(rectangle instanceof Triangle);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object);

console.log(triangle.toString());

// MDN JavaScript reference, Built-ins

