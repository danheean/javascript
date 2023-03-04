// const loginForm = document.querySelector("#login-form");
// const loginForm = document.getElementById("login-form");

// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const link = document.querySelector("a");
const h2 = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// console.log(loginInput.placeholder);

function onLoginBtnClick() {
    const username = loginInput.value;

    // if (username === "") {
    //     // console.log("Please write your name");
    //     alert("Please write your name");
    // } else if (username.length > 15) {
    //     alert("Your name is too long.");
    // } else {
    //     console.log("hello", loginInput.value);
    // }
    // // console.log("click!!!!");
}

function onLoginSubmit_01(event) {
    event.preventDefault();
    // console.log(tomato);

    const username = loginInput.value;
    console.log(username);
}
// loginButton.addEventListener("click", onLoginBtnClick);

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

function onLoginSubmit(event) {
    event.preventDefault();
    // console.log(tomato);

    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // console.log(username);

    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);

    // alert("clicked!");
}

// handleLinkClick({information about the event that just happended});
// link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // hide the form
    // loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}
