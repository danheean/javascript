'use strict';
// Function

// procedure, prototype

// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// name: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoing
// function is object in JS

function printHello() {
  console.log('Hello');
}

printHello();

function log(message) {
  console.log(message);
}

log('Hello@');
log(1234);

// TypeScript > Playground

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj)
{
  obj.name = 'coder';
}

const jurepi = { name: 'jurepi' };
changeName(jurepi);

console.log(jurepi);

// 3. Default parameters (added in ES6)
function showMessage_0(message, from)
{
  if(from === undefined)
  {
    from = 'unknown';
  }
  console.log(`${message} by ${from}`);
}

function showMessage(message, from = 'unknown')
{
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args)
{
  for(let i = 0; i<args.length; i++)
  {
    console.log(args[i]);
  }

  for (const arg of args)
  {
    console.log(arg);
  }

  args.forEach(arg => console.log(arg));
}

printAll('dream', 'coding', 'jurepi');

// 5. Local scope
let globalMessage = 'global'; // global variabel
function printMessage()
{
  let message = 'hello';
  console.log(message); // local value
  console.log(globalMessage);

  function printAnother(){
    console.log(message);
    let childMessage = 'hello';
  }

  // console.log(childMesssage); // error, <- closer~
  return undefined;
}
printMessage();

// 6. Return a value
function sum(a, b)
{
  return a + b;
}

const result = sum(1, 3); // 3
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit
// bad
function upgradeUser(user)
{
  if(user.point > 10)
  {
    // long upgrade logic...
  }
}

function upgradeUser(user)
{
  if(user.point <= 10)
  {
    return;
  }
    // long upgrade logic...
}
// upgradeUser(user);


// First-class function
// function are treated like any other variable;
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function experssion
// a function declaration can be called earlier than it is defined. (hoisted)
// a function experssion is created when the execution reaches it.

const print = function () // anonymous function <> named functiton
{
  console.log('print');
};
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function experssion
// 함수를 전달하여 함수를 적절하게 실행시킴
function randomQuiz(answer, printYes, printNo)
{
  if(answer === 'love you')
  {
    printYes();
  }
  else{
    printNo();
  }
}

// anonymous function
const printYes = function()
{
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print()
{
  console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function - 함수를 간결하게
// always anonymous
const simplePrint_b = function(){
  console.log('simplePrint!');
}; 

const simplePrint = () => console.log('simplePrint!');

const add = (a, b) => a + b;

const add_b = function (a, b)
{
  return a + b;
};

const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Experssion
// { function hello()
// {
//   console.log('IIFE');
// } } ();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b)
{
  switch(command)
  {
    case 'add': 
      return a+b;
    case 'substract': 
      return a-b;
    case 'divide': 
      return a/b;
    case 'multiply': 
      return a*b;
    case 'remainder': 
      return a%b;
    default :
      throw Error('unknown command');
  }
}

console.log(calculate('add', 2, 3));
console.log(calculate('add', 2, 3));

