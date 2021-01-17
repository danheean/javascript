// 1. Use strict
// added in ES 5
// use this for Valina Javascript. (pojo java와 비슷한 말인가?)

'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';

{
    let name = 'jurepi';
    console.log(name);

    name = 'hello';
    console.log(name);
    
    console.log(globalName);
}

console.log(name);
console.log(globalName);
// var (don't ever use this!)
// var hoisting move declaration from bottom to top (변수를 상위로 올려줌)

// has no block scope 

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i, e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security (해커 변경 못함)
// - thread safety
// - reduce human mistakes



// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol (값 자체가 메모리에 저장)
// object, box container (ref, 포인터 저장) 
// function, first-class function (함수도 데이터 타입으로 활용, 매개변수, 리턴값, VALUE...)

const count = 17;
const size = 17.1; 

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
// over (-2**53) ~ 2**53)
// bigint 
const bigInt = 111n;


// template literals (string)

// back tick 

// Infinity
// -Infinity
// NaN

// false: 0, null, undefined, NaN, ''

// undefined
let x = undefined;
console.log(   );

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');

console.log(gsymbol1 === gsymbol2);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

