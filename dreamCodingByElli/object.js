'use strict';

// 7. Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }

// 1. Literal and properties
const name = 'jurepi';
const age = 4;
print_(name, age);

function print_(name, age)
{
  console.log(name);
  console.log(age);
}

function print(person)
{
  console.log(person.name);
  console.log(person.age);
}

const jurepi = {name: 'jurepi', age: 4};
print(jurepi);

// with JavaScript magic (dynamically typed language)
// can add roperties later
jurepi.hasJob = true;
console.log(jurepi.hasJob);

delete jurepi.hasJob;
console.log(jurepi.hasJob);

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object construcor' syntax

// 2. Computed properties
// key should be always string(**)
console.log(jurepi.name);
console.log(jurepi['name']);

jurepi['hasJob'] = true;
console.log(jurepi.hasJob);

// .(dot) - 코딩하는 순간 가져올 경우 (확실히 알 경우)
// key(string) - runtime에서 결정 될 경우 (잘 모를경우)

function printValue(obj, key)
{
  console.log(obj[key]);
}

printValue(jurepi, 'name');
printValue(jurepi, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = makePerson('jurepi', 30);
const person5 = new Person('jurepi', 30);
console.log(person4);

function makePerson(name, age)
{
  return {
    name
    , age
  };
}

// 4. Constructor function
function Person(name, age)
{
  // this = {};
  this.name = name;
  this.age = age;

  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in jurepi);
console.log('age' in jurepi);
console.log('random' in jurepi);

console.log(jurepi.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in jurepi)
{
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(let i =0; i<array.length; i++)
{
  console.log(array[i]);
}

for(let value of array)
{
  console.log(value)
}

console.clear();
// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'jurepi', age: '20'};
const user2 = user;

user.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);

// 같이 키를 가지고 있을 경우 마지막이 
console.log(mixed.color);
console.log(mixed.size);


