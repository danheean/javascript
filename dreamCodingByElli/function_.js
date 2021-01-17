// Don't give up
// 포기하지 마세요 🥑

// Haskell
// 함수 선언
// 함수 호출

function doSomething(add) {
  console.log(add);

  const result = add(2, 3);
  console.log(result);
}

function add(a, b)
{
  const sum = a + b;

  // console.log(sum);
  return sum;
}

const result = add (1, 2);
// console.log(result);
// add(1, 2);

// doSomething(add(1, 2));

// doSomething(add);

const addFun = add;
// console.log(add);

addFun(1, 2);

add


