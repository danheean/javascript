const clock = document.querySelector("h2#clock"); 

function sayHello() {
  console.log("hello");
}

// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);
// sayHello();

function getClock() {
  const today = new Date();
  // console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`)
   const hours = String(today.getHours()).padStart(2, "0");
   const minutes = String(today.getMinutes()).padStart(2, "0");
   const seconds = String(today.getSeconds()).padStart(2, "0"); 

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
