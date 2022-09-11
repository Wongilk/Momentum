const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const input = todoForm.querySelector("input");
let todoarray = [];

function toDos() {
  localStorage.setItem("todo", JSON.stringify(todoarray));
}

function paintToDo(todoobj) {
  const li = document.createElement("li");
  li.id = todoobj.id;
  const span = document.createElement("span");
  span.innerText = todoobj.text;
  const btn = document.createElement("button");
  btn.innerText = "X";
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);

  toDos();

  btn.addEventListener("click", (e) => {
    const deLi = e.target.parentElement;
    const deli_id = deLi.id;
    deLi.remove();
    todoarray = todoarray.filter((todo) => {
      return todo.id !== parseInt(deli_id);
    });
    toDos();
  });
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userTodo = input.value;
  input.value = "";
  const todoobj = {
    id: Date.now(),
    text: userTodo,
  };
  todoarray.push(todoobj);
  paintToDo(todoobj);
});

const savedtodos = localStorage.getItem("todo");
if (savedtodos) {
  const parsedToDo = JSON.parse(savedtodos);
  todoarray = parsedToDo;
  parsedToDo.forEach(paintToDo);
}
