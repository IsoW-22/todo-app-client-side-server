"use strict";

const createTodo = (todoText, doneCheck, todoId, oldTodo) => {
  const body = document.querySelector(".items");
  const createButton = document.getElementById("create");
  const counter = body.childNodes.length - 3;

  // input todo
  const todoContainer = buildElement("div", "todo-item");
  todoContainer.id = todoId ? todoId : `item-${counter}`;
  const textarea = buildElement("input", "task");
  textarea.value = todoText ? todoText : "new task";
  textarea.readOnly = true;
  textarea.addEventListener("focusout", () => {
    if(textarea.value === " " || textarea.value === null){
      textarea.value = "new task";
    }
    textarea.readOnly = true;
  });
  todoContainer.appendChild(textarea);
  body.insertBefore(todoContainer, createButton);

  //edit button
  const editButton = buildElement("button", "edit-icon");
  const editImg = buildElement("img");
  editImg.src = "https://img.icons8.com/external-flaticons-flat-flat-icons/25/000000/external-edit-100-most-used-icons-flaticons-flat-flat-icons-2.png";
  todoContainer.appendChild(editButton);
  editButton.appendChild(editImg);
  editButton.addEventListener("click", (event) => {
    const {target} = event;
    const input = target.parentNode.querySelector(".task");
    input.value = "";
    input.readOnly = false;
    input.focus();
  })

  // done button
  const doneButton = buildElement("button", "tick-icon");
  const doneImg = buildElement("img");
  doneImg.src =
  "https://img.icons8.com/external-others-inmotus-design/20/000000/external-Done-accept-others-inmotus-design-2.png";
  todoContainer.appendChild(doneButton);
  doneButton.appendChild(doneImg);
  doneButton.addEventListener("click", (event) => {
    const {target} = event;
    const parent = target.parentNode;
    const parentID = parent.id;
    if(parent.classList.contains("done-item")){
      parent.classList.toggle("done-item");
      let allTodos = JSON.parse(localStorage.getItem("items"));
      allTodos.find(element => {
        if(element.id === parentID) {
          element.done = false;
        }
      });
      allTodos = JSON.stringify(allTodos);
      localStorage.setItem("items", allTodos);
      parent.querySelector(".edit-icon").disabled = false;
    }
    else {
      parent.classList.toggle("done-item");
      let allTodos = JSON.parse(localStorage.getItem("items"));
      allTodos.find(element => {
        if(element.id === parentID) {
          element.done = true;
        }
      });
      allTodos = JSON.stringify(allTodos);
      localStorage.setItem("items", allTodos);
      parent.querySelector(".edit-icon").disabled = true;
    }
  });
  if(doneCheck) doneButton.click();
  
  //delete button
  const deleteButton = buildElement("button", "delete-icon");
  const deleteImg = buildElement("img");
  deleteImg.src = "https://img.icons8.com/color/23/000000/cancel--v3.png";
  todoContainer.appendChild(deleteButton);
  deleteButton.appendChild(deleteImg);
  deleteButton.addEventListener("click", (event) => {
    const {target} = event;
    const targetID = target.parentNode.id;
    let items = JSON.parse(localStorage.getItem("items"));
    let filtered = items.filter(function(el) { return el.id != targetID; });
    filtered = JSON.stringify(filtered);
    localStorage.setItem("items", filtered);
    target.parentNode.remove();
  });

  //adding client-side database
  if (oldTodo) {
    return;
  }
  else {
    const newTodo = {
      value: textarea.value,
      done: false,
      id: `item-${counter}`
    }
    if(localStorage.getItem("items")){
      const localStorageItems = JSON.parse(localStorage.getItem("items"));
      localStorageItems.push(newTodo);
      localStorage.setItem("items", JSON.stringify(localStorageItems));
    }
    else {
      const jsonNewTodo = JSON.stringify(newTodo);
      localStorage.setItem("items", `[${jsonNewTodo}]`);
    }
  }
}

const buildElement = (element, cssClass) => {
  const newElement = document.createElement(element);
  if(cssClass)
      newElement.classList.add(cssClass);
  return newElement;
}

const createNewTodo = document.querySelector(".create");
createNewTodo.addEventListener("click", () => {
  createTodo();
});

//add todo on startup
const checkLocal = JSON.parse(localStorage.getItem("items"));
if(checkLocal !== "[]" || checkLocal !== null) {
  checkLocal.forEach(element => {
    createTodo(element.value, element.done, element.id, true);
  });
}


//showing all todos
const allTodoSelect = () => {
  const todosInPage = document.querySelectorAll(".items .todo-item");
  todosInPage.forEach(element => {
    element.style.display = "block";
  })
}

const allTodos = document.querySelector(".all");
allTodos.addEventListener("click", allTodoSelect);

//showing active todos
const activeTodoSelect = () => {
  const todosInStorage = JSON.parse(localStorage.getItem("items"));
  const todosInPage = document.querySelectorAll(".items .todo-item");
  const filteredITems = todosInStorage.filter(function(el) { return el.done !== true; });
  todosInPage.forEach(element => {
    element.style.display = "none";
  })
  for(let i = 0; i < todosInPage.length; i++) {
    for(let j = 0; j < filteredITems.length; j++) {
      if(todosInPage[i].id === filteredITems[j].id) {
        todosInPage[i].style.display = "block";
      }
    }
  }
}

const activeTodos = document.querySelector(".active");
activeTodos.addEventListener("click", activeTodoSelect);