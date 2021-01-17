'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state; pending -> fulfilled or rejected
// Producter vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  // doing some heavy work ()
  console.log('doing something...');

  setTimeout(() => {
    resolve('jurepi');
    // reject(new Error('no network'))
  }, 2000);

});

// 2. Consumers: Then, catch, finally
// then 이후 promise를 리턴하므로, catch를 등록하여 이어 진핼할 수 있음
// chaining
promise.then((value) => {
  console.log(value);
})
.catch(error => {
  console.log(error);
})
.finally(() => console.log('finally')
);

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})

fetchNumber.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  });
}) 
.then()
.then(num => console.log(num));

// 4. Error handling
const getHen = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('🐔'), 1000);
})

const getEgg = hen => 
new Promise((resolve, reject) => {
  // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
})

const cook = egg => 
new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${egg} => 🥯`), 1000);
})

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

getHen()
.then(getEgg)
.catch(error => {
  return '🍗';
})
.then(cook)
.then(console.log)
.catch(console.log);

// 5. 



























