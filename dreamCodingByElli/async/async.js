'use strict';

// 13. Async & await
// syntactic sugar
// clear style of using promise :)

// 1. async
// 자동으로 promise로 바꾸어 줌
function fetchUser_promise()
{
  return new Promise(function(resolve, reject){
    // do network request in 10 secs....
    resolve('ellie');

    // resolve ore reject가 없으면 계속 pending 상태가 됨
    // promise return;
  });
}

async function fetchUser()
{
  return 'ellie';
}

const user = fetchUser(); 
console.log(user);

// 2. await 
function delay(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple()
{
  await delay(1000);
  return '🍎';
}

async function getBanana()
{
  await delay(1000);
  return '🍌';
}

function getBanana_promise()
{
  return delay(3000).then(() => '🍌');
}

function pickFruits_promise()
{
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`);
  });
}

async function pickFruits_sync()
{
  let apple;
  let banana;
  try{
    apple = await getApple();
    banana = await getBanana();
  }
  catch(error)
  {
  }

  return `${apple} + ${banana}`;
}


async function pickFruits()
{
  let apple;
  let banana;
  try{
    const applePromise = getApple();
    const bananaPromise = getBanana();

    apple = await applePromise;
    banana = await bananaPromise;
  }
  catch(error)
  {
  }

  return `${apple} + ${banana}`;
}

// pickFruits().then(console.log);

// 3. useful Promise APIS
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne()
{
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);























