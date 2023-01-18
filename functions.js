"use strict";

const createTodo = (content, cssClass) => {
  const textarea = buildElement("input", "task");
  const todoContainer = buildElement("div", "todo-item");
  const tickButton = buildElement("button", "tick-icon");
  todoContainer.appendChild(tickButton);
  
}

const buildElement = (element, cssClass) => {
  const newElement = document.createElement(element);
  newElement.classList.add(cssClass);
  return newElement;
}

const create = document.querySelector(".create");
create.addEventListener("click", createTodo);


// user name ..
if (localStorage.getItem("name") == null) {
  const name = prompt("enter your name", "new user");
  if (name == null || name == "") {
    document.querySelector(".user").innerHTML = "new user";
  } else {
    localStorage.setItem("name", name);
    document.querySelector(".user").innerHTML = name;
  }
} else {
  const newName = localStorage.getItem("name");
  document.querySelector(".user").innerHTML = newName;
}


// const createNewTask = () => {
//   const ses = sessionStorage.getItem("current div");
//   const itemCount = document.querySelector(`#${ses} .items`).childNodes.length;
//   const main = document.querySelector(`#${ses} .items`);
//   const create = document.querySelector(`#${ses} #create`);
//   const textarea = document.createElement("input");
//   textarea.classList.add("task");
//   const div = document.createElement("div");
//   div.classList.add("todo-item");
//   div.setAttribute("id", `item-${itemCount - 1}`);
//   main.insertBefore(div, create);

//   const tickButton = document.createElement("Button");
//   const tickImg = document.createElement("img");
//   tickImg.src =
//     "https://img.icons8.com/external-others-inmotus-design/20/000000/external-Done-accept-others-inmotus-design-2.png";
//   tickButton.classList.add("tick-icon");
//   div.appendChild(tickButton);
//   tickButton.appendChild(tickImg);

//   const delButton = document.createElement("button");
//   const delImg = document.createElement("img");
//   delImg.src = "https://img.icons8.com/color/23/000000/cancel--v3.png";
//   delButton.classList.add("delete-icon");
//   delButton.appendChild(delImg);
//   div.appendChild(delButton);

//   const editButton = document.createElement("button");
//   const editImg = document.createElement("img");
//   editImg.src =
//     "https://img.icons8.com/external-flaticons-flat-flat-icons/25/000000/external-edit-100-most-used-icons-flaticons-flat-flat-icons-2.png";
//   editButton.classList.add("edit-icon");
//   editButton.appendChild(editImg);
//   div.appendChild(editButton);

//   const starButton = document.createElement("button");
//   const star = document.createElement("p");
//   star.innerHTML = "&#9733;";
//   star.classList.add("important");
//   starButton.classList.add("important-button");
//   starButton.appendChild(star);
//   div.appendChild(starButton);

//   div.appendChild(textarea);
//   textarea.focus();
//   textarea.addEventListener("focusout", disableButton);
// };

// const create = document.querySelector(".create");
// create.addEventListener("click", createNewTask);

// function disableButton(event) {
//   const target = event.target;
//   target.readOnly = true;
//   if (target.value == "" || target.value == null) {
//     target.value = "new task";
//   }
// }
// // ^^^^^^^^^^^^^ up there... to make new tasks no? :D ^^^^^^^^^^

// const userChange = document.querySelector(".user");
// userChange.addEventListener("click", () => {
//   const name = prompt("enter your name", localStorage.getItem("name"));
//   if (name != null || name == "") {
//     localStorage.clear();
//     localStorage.setItem("name", name);
//     document.querySelector(".user").innerHTML = name;
//   } else {
//     document.querySelector(".user").innerHTML = localStorage.getItem("name");
//   }
// });

// // now lets do something more fun down here!
// //lets make these tasks buttons work :D so tick will... check it green? important yellow? ok

// function allButtons(event) {
//   const { target } = event;

//   if (target.classList.contains("tick-icon")) {
//     const id = target.parentNode.getAttribute("id");
//     const currentDivision = sessionStorage.getItem("current div");

//     if (target.parentNode.classList.contains("done-item")) {
//       target.parentNode.classList.toggle("done-item");
//       target.parentNode.querySelector(".edit-icon").disabled = false;
//       target.parentNode.querySelector(".important-button").disabled = false;
//       const sesDone = JSON.parse(
//         sessionStorage.getItem(`${currentDivision}-done`)
//       );
//       const index = sesDone.indexOf(id);
//       if (index > -1) {
//         sesDone.splice(index, 1);
//       }
//       sessionStorage.removeItem(`${currentDivision}-done`);
//       sessionStorage.setItem(
//         `${currentDivision}-done`,
//         JSON.stringify(sesDone)
//       );
//     } else {
//       target.parentNode.classList.toggle("done-item");
//       target.parentNode.querySelector(".edit-icon").disabled = true;
//       target.parentNode.querySelector(".important-button").disabled = true;
//       let sesItem = JSON.parse(
//         sessionStorage.getItem(`${currentDivision}-items`)
//       );
//       let sessionDone = JSON.parse(
//         sessionStorage.getItem(`${currentDivision}-done`)
//       );
//       sessionDone.push(id);
//       sessionStorage.removeItem(`${currentDivision}-done`);
//       sessionStorage.setItem(
//         `${currentDivision}-done`,
//         JSON.stringify(sessionDone)
//       );
//       const index = sesItem.indexOf(id);
//       if (index > -1) {
//         sesItem.splice(index, 1);
//       }
//       sessionStorage.removeItem(`${currentDivision}-items`);
//       sessionStorage.setItem(
//         `${currentDivision}-items`,
//         JSON.stringify(sesItem)
//       );
//       if (target.parentNode.classList.contains("important-item")) {
//         target.parentNode.classList.toggle("important-item");
//       }
//     }
//   }

//   if (target.classList.contains("delete-icon")) {
//     if (confirm("are you sure you want to delete this task?")) {
//       target.parentNode.remove();
//     } else {
//       return;
//     }
//   }

//   if (target.classList.contains("edit-icon")) {
//     target.parentNode.querySelector(".task").readOnly = false;
//     target.parentNode.querySelector(".task").focus();
//   }

//   if (target.classList.contains("important-button")) {
//     const id = target.parentNode.id;
//     const currentDiv = sessionStorage.getItem("current div");

//     if (target.parentNode.classList.contains("important-item")) {
//       target.parentNode.classList.toggle("important-item");
//       let sItemsForDel = JSON.parse(
//         sessionStorage.getItem(`${currentDiv}-items`)
//       );
//       const index = sItemsForDel.indexOf(id);
//       if (index > -1) {
//         sItemsForDel.splice(index, 1);
//       }
//       sessionStorage.removeItem(`${currentDiv}-items`);
//       sessionStorage.setItem(
//         `${currentDiv}-items`,
//         JSON.stringify(sItemsForDel)
//       );
//     } else {
//       target.parentNode.classList.toggle("important-item");
//       let sessionItems = JSON.parse(
//         sessionStorage.getItem(`${currentDiv}-items`)
//       );
//       sessionItems.push(id);
//       sessionStorage.removeItem(`${currentDiv}-items`);
//       sessionStorage.setItem(
//         `${currentDiv}-items`,
//         JSON.stringify(sessionItems)
//       );
//     }
//   }
// }

// const tasks = document.querySelector(".items");
// tasks.addEventListener("click", allButtons);

// // nowwwww lets make important tasks :D
// // just some copy pastes you know :D

// const createNewImportantTask = () => {
//   const ses = sessionStorage.getItem("current div");
//   const itemCount = document.querySelector(`#${ses} .items`).childNodes.length;
//   const main = document.querySelector(`#${ses} .items`);
//   const create = document.querySelector(`#${ses} #create`);

//   const textarea = document.createElement("input");

//   const div = document.createElement("div");
//   div.classList.add("todo-item");
//   div.classList.add("important-item");
//   div.setAttribute("id", `item-${itemCount - 1}`);
//   main.insertBefore(div, create);

//   const tickButton = document.createElement("Button");
//   const tickImg = document.createElement("img");
//   tickImg.src =
//     "https://img.icons8.com/external-others-inmotus-design/20/000000/external-Done-accept-others-inmotus-design-2.png";
//   tickButton.classList.add("tick-icon");
//   div.appendChild(tickButton);
//   tickButton.appendChild(tickImg);

//   const delButton = document.createElement("button");
//   const delImg = document.createElement("img");
//   delImg.src = "https://img.icons8.com/color/23/000000/cancel--v3.png";
//   delButton.classList.add("delete-icon");
//   delButton.appendChild(delImg);
//   div.appendChild(delButton);

//   const editButton = document.createElement("button");
//   const editImg = document.createElement("img");
//   editImg.src =
//     "https://img.icons8.com/external-flaticons-flat-flat-icons/25/000000/external-edit-100-most-used-icons-flaticons-flat-flat-icons-2.png";
//   editButton.classList.add("edit-icon");
//   editButton.appendChild(editImg);
//   div.appendChild(editButton);

//   const starButton = document.createElement("button");
//   const star = document.createElement("p");
//   star.innerHTML = "&#9733;";
//   star.classList.add("important");
//   starButton.classList.add("important-button");
//   starButton.appendChild(star);
//   div.appendChild(starButton);

//   textarea.classList.add("task");
//   div.appendChild(textarea);

//   const id = div.getAttribute("id");
//   const divID = sessionStorage.getItem("current div");
//   let sessionItems = JSON.parse(sessionStorage.getItem(`${divID}-items`));
//   sessionItems.push(id);
//   sessionStorage.removeItem(`${divID}-items`);
//   sessionStorage.setItem(`${divID}-items`, JSON.stringify(sessionItems));
//   textarea.focus();
//   textarea.addEventListener("focusout", disableButton);
// };

// const createImp = document.getElementById("create-imp");
// createImp.addEventListener("click", createNewImportantTask);

// //and the last paaaaaaart
// //these lists "SHOOOOOOOULD work"

// const createList = () => {
//   const listNames = document.querySelectorAll(
//     ".list-name:not(.list2 .list-name)"
//   );
//   const listName = prompt("enter list name", "untitled list");
//   if (listName == null || listName == "") {
//     return;
//   } else {
//     listNames.forEach((name) => {
//       name.innerHTML = listName;
//     });
//   }
//   const contents = document.querySelectorAll('[id*="content"]');
//   contents.forEach((items) => {
//     items.style.display = "none";
//   });

//   const container = document.getElementById("container");
//   const containerL = document.getElementById("container").childNodes.length;
//   const content = document.createElement("div");
//   content.setAttribute("id", `content-${containerL - 6}`);
//   container.appendChild(content);

//   sessionStorage.setItem("current div", `content-${containerL - 6}`);

//   const listNameDiv = document.createElement("div");
//   listNameDiv.classList.add("list2");
//   content.appendChild(listNameDiv);
//   const listNameP = document.createElement("p");
//   listNameP.classList.add("list-name");
//   listNameDiv.appendChild(listNameP);
//   const spanP = document.createElement("span");
//   spanP.classList.add("pointer");
//   spanP.innerHTML = listName;
//   listNameP.appendChild(spanP);

//   const itemsDiv = document.createElement("div");
//   itemsDiv.classList.add("items");
//   itemsDiv.addEventListener("click", allButtons);
//   content.appendChild(itemsDiv);
//   const createDiv = document.createElement("div");
//   createDiv.setAttribute("id", "create");
//   createDiv.classList.add("create");
//   createDiv.addEventListener("click", createNewTask);
//   itemsDiv.appendChild(createDiv);
//   const img = document.createElement("img");
//   img.src =
//     "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/25/000000/external-Green-Plus-miscellaneous-kiranshastry-lineal-color-kiranshastry.png";
//   createDiv.appendChild(img);
//   const createP = document.createElement("p");
//   createP.innerHTML = "Create";
//   createDiv.appendChild(createP);
//   const createImp = document.createElement("div");
//   createImp.classList.add("create-imp");
//   createImp.setAttribute("id", "create-imp");
//   createImp.addEventListener("click", createNewImportantTask);
//   itemsDiv.appendChild(createImp);
//   const img2 = document.createElement("img");
//   img2.src =
//     "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/25/000000/external-Green-Plus-miscellaneous-kiranshastry-lineal-color-kiranshastry.png";
//   createImp.appendChild(img2);
//   const createP2 = document.createElement("p");
//   createP2.innerHTML = "Create important task";
//   createImp.appendChild(createP2);

//   const listNav = document.createElement("li");
//   listNav.classList.add("list-item");
//   listNav.setAttribute("id", `item-${containerL - 6}`);
//   sessionStorage.setItem(`item-${containerL - 6}`, `content-${containerL - 6}`);
//   sessionStorage.setItem(`content-${containerL - 6}-items`, "[]");
//   sessionStorage.setItem(`content-${containerL - 6}-done`, "[]");
//   listNav.innerHTML = listName;
//   document
//     .querySelector(".lists ul")
//     .insertBefore(listNav, document.querySelector(".lists ul .create-list"));
//   const listImg = document.createElement("img");
//   listImg.src = "https://img.icons8.com/emoji/20/000000/minus-emoji.png";
//   listImg.classList.add("delete-list");
//   listNav.appendChild(listImg);
//   document.querySelectorAll(".lists-items li").forEach((li) => {
//     if (li.classList.contains("selected-list"))
//       li.classList.toggle("selected-list");
//   });
//   listNav.classList.toggle("selected-list");
// };

// document.querySelector(".create-list").addEventListener("click", createList);

// //and the last one for lists to choose :

// function listCheck(event) {
//   showAll();
//   const { target } = event;
//   if (target.classList.contains("list-item")) {
//     const id = target.id;
//     const thisDiv = sessionStorage.getItem(id);
//     const divisions = document.querySelectorAll('[id*="content"]');
//     divisions.forEach((division) => {
//       division.style.display = "none";
//     });
//     document.querySelector("#" + thisDiv).style.display = "block";
//     sessionStorage.setItem("current div", thisDiv);
//     target.parentNode.querySelectorAll("li").forEach((node) => {
//       if (node.classList.contains("selected-list")) {
//         node.classList.toggle("selected-list");
//       }
//     });
//     target.classList.toggle("selected-list");
//   }
//   if (target.classList.contains("delete-list")) {
//     const getID = target.parentNode.id;
//     const getsesID = sessionStorage.getItem(getID);
//     document.querySelector("#" + getsesID).style.display = "none";
//     document.querySelector("#content").style.display = "block";
//     const item0 = document.querySelector("#item-0");
//     document.querySelectorAll(".lists-items li").forEach((node) => {
//       if (node.classList.contains("selected-list")) {
//         node.classList.toggle("selected-list");
//       }
//     });
//     sessionStorage.setItem("current div", "content");
//     sessionStorage.removeItem(getID);
//     sessionStorage.removeItem(`${getsesID}-items`);
//     target.parentNode.remove();
//     if (!item0.classList.contains("selected-list")) {
//       item0.classList.toggle("selected-list");
//     }
//   }
// }

// const selectLists = document.querySelector(".lists-items");
// selectLists.addEventListener("click", listCheck);

// // new check tasks, added 9/9/2022

// function showAll() {
//   const sesCur = sessionStorage.getItem("current div");
//   const items = document.querySelectorAll(".todo-item");
//   const thisItem = document.querySelector(".day");
//   items.forEach((item) => {
//     item.style.display = "block";
//   });
//   document.querySelector(`#${sesCur} .create-imp`).style.display = "none";
//   document.querySelector(`#${sesCur} .create`).style.display = "block";
//   const selections = document.querySelectorAll(".new-ul li");
//   selections.forEach((select) => {
//     if (select.classList.contains("selected-task")) {
//       select.classList.toggle("selected-task");
//     }
//   });
//   if (!thisItem.classList.contains("selected-task")) {
//     thisItem.classList.toggle("selected-task");
//   }
// }

// function justImportant() {
//   const items = document.querySelectorAll(".todo-item");
//   const id = document.querySelectorAll(".items [id]:not(#create)");
//   const sesCur = sessionStorage.getItem("current div");
//   const thisItem = document.querySelector(".importants");
//   let sItems = JSON.parse(sessionStorage.getItem(`${sesCur}-items`));
//   let i = 0;
//   items.forEach((item) => {
//     item.style.display = "none";
//   });
//   for (; i < id.length; i++) {
//     id.forEach((item2) => {
//       if (sItems[i] == item2.id) {
//         item2.style.display = "block";
//       }
//     });
//   }
//   document.querySelector(`#${sesCur} .create-imp`).style.display = "block";
//   document.querySelector(`#${sesCur} .create`).style.display = "none";
//   const selections = document.querySelectorAll(".new-ul li");
//   selections.forEach((select) => {
//     if (select.classList.contains("selected-task")) {
//       select.classList.toggle("selected-task");
//     }
//   });
//   if (!thisItem.classList.contains("selected-task")) {
//     thisItem.classList.toggle("selected-task");
//   }
// }

// const completedTasks = () => {
//   const items = document.querySelectorAll(".todo-item");
//   const allItems = document.querySelectorAll(".items [id]:not(#create)");
//   const currentSession = sessionStorage.getItem("current div");
//   const currItem = document.querySelector(".completed");
//   let i = 0;
//   let activeItems = JSON.parse(
//     sessionStorage.getItem(`${currentSession}-done`)
//   );
//   items.forEach((part) => {
//     part.style.display = "none";
//   });
//   for (; i < allItems.length; i++) {
//     allItems.forEach((item2) => {
//       if (activeItems[i] == item2.id) {
//         item2.style.display = "block";
//       }
//     });
//   }
//   document.querySelector(`#${currentSession} .create-imp`).style.display =
//     "none";
//   document.querySelector(`#${currentSession} .create`).style.display = "none";
//   const selections = document.querySelectorAll(".new-ul li");
//   selections.forEach((select) => {
//     if (select.classList.contains("selected-task")) {
//       select.classList.toggle("selected-task");
//     }
//   });
//   if (!currItem.classList.contains("selected-task")) {
//     currItem.classList.toggle("selected-task");
//   }
// };

// const activeTasks = () => {
//   const items = document.querySelectorAll(".todo-item");
//   const allItems = document.querySelectorAll(".items [id]:not(#create)");
//   const currentSession = sessionStorage.getItem("current div");
//   const currItem = document.querySelector(".active");
//   const creates = document.querySelector(`#${currentSession} .create-imp`);
//   const creates2 = document.querySelector(`#${currentSession} .create`);
//   let i = 0;
//   let activeItems = JSON.parse(
//     sessionStorage.getItem(`${currentSession}-done`)
//   );
//   items.forEach((part) => {
//     part.style.display = "block";
//   });
//   for (; i < allItems.length; i++) {
//     allItems.forEach((item2) => {
//       if (activeItems[i] == item2.id) {
//         item2.style.display = "none";
//       }
//     });
//   }
//   if (creates.style.display == "block" || creates2.style.display == "none") {
//     creates.style.display = "none";
//     creates2.style.display = "block";
//   }
//   const selections = document.querySelectorAll(".new-ul li");
//   selections.forEach((select) => {
//     if (select.classList.contains("selected-task")) {
//       select.classList.toggle("selected-task");
//     }
//   });
//   if (!currItem.classList.contains("selected-task")) {
//     currItem.classList.toggle("selected-task");
//   }
// };

// const taskSelection = (event) => {
//   const { target } = event;
//   if (target.classList.contains("day")) {
//     showAll();
//   }

//   if (target.classList.contains("active")) {
//     activeTasks();
//   }
//   if (target.classList.contains("completed")) {
//     completedTasks();
//   }
//   if (target.classList.contains("importants")) {
//     justImportant();
//   }
// };

// const taskSelect = document.querySelector(".new-ul");
// taskSelect.addEventListener("click", taskSelection);