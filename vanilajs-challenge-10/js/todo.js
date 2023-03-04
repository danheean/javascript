const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let todos = loadTodos();

function sayHello(item) {
  console.log("this is the turn of", item);
}

/*
 * filter 특징
 * 1. 옵션은 새로운 배열을 만드는 것
 * 2. 유지하고 싶으면 true
 * 3. 필터링하려면 false
 */

function loadTodos() {
  const savedTodos = localStorage.getItem(TODOS_KEY);
  // console.log(saveTodos);

  let parsedTodos = [];

  if (savedTodos !== null) {
    parsedTodos = JSON.parse(savedTodos);
    // console.log(parsedTodos);

    // parsedTodos.forEach(sayHello);
    // parsedTodos.forEach((item) => console.log("this is the turn of", item));
    // parsedTodos.forEach((item) => paintTodo(item));
    parsedTodos.forEach(paintTodo);
  }

  return parsedTodos;
}

function saveTodos() {
  // console.log(JSON.stringify(todos));
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function removeTodo(todoObj, li_id) {
  return todoObj.id !== li.id;
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  // console.log(li.id, li);
  // todos = todos.filter(removeTodo);
  li.remove();

  todos = todos.filter((item) => item.id !== parseInt(li.id, 10));
  saveTodos();
}

function paintTodo(todoObj) {
  // console.log("i will paint", todo);

  const li = document.createElement("li");
  li.id = todoObj.id;

  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "❎";
  button.innerText = "✖";

  li.appendChild(span);
  li.appendChild(button);

  button.addEventListener("click", deleteTodo);

  span.innerText = todoObj.text;

  todoList.append(li);
}

function handleTodoSubmint_01(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";

  // console.log(newTodo, todoInput.value);
  paintTodo(newTodo);
}

function handleTodoSubmint(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
    date: new Date().toISOString(),
  };
  todos.push(newTodoObj);

  // console.log(newTodo, todoInput.value);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmint);
