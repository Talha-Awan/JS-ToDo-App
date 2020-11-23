const form = document.querySelector(".todoForm");
const inputField = document.querySelector(".taskInputField");
let incompleteTasksList = document.querySelector(".todoTasksList");
let completeTaskList = document.querySelector(".doneTaskList");
let todoArr = [];
let compArr = [];

//Generate Current Date
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
today = dd + "/" + mm + "/" + yyyy;

// Attach an event handler to the targeted element of the DOM.
form.addEventListener("submit", function (event) {
	// prevent the page from reloading on form submit
	event.preventDefault();
	addTodo(inputField.value);
});

// function to add todo item
function addTodo(item) {
	if (item !== "") {
		let todo = {
			id: Date.now(),
			name: item,
			date: today,
		};
		todoArr.push(todo);
		addHTMLTodos(todoArr);
		insertItem(todoArr);
		// console.log(todos);
		inputField.value = "";
	} else {
		alert("Please Enter Something!");
	}
}

// function to generate html for displaying item on page
function addHTMLTodos(todo) {
	incompleteTasksList.innerHTML = "";
	for (let i = 0; i < todo.length; i++) {
		let node = document.createElement("li");
		node.setAttribute("class", `"item"`);
		node.setAttribute("dataKey", todo[i].id);
		node.setAttribute("update-key", `"item${i}"`);
		node.innerHTML =
			`
        <input type="checkbox" class="checkbox" id="${i}" onclick=completeTasks(` +
			todo[i].id +
			`,` +
			i +
			`)>
      <small>Task Added: ${todo[i].date}</small>
      <span><input type="text" id="item${i}" class="myinput" value="${todo[i].name}" disabled "/> </span>
      <button class="btn btn-warning updateBtn" id="btn${i}" onclick=editItem(` +
			i +
			`)>Edit</button>
      <button class="btn btn-danger deleteBtn">Delete</button>
      <br/>
      <hr/>
    `;
		// Append the element to the DOM as the last child of the element
		incompleteTasksList.append(node);
	}
}

//function to create complete list  items
function addHTMLcomp(todo) {
	// alert(todo.length);
	completeTaskList.innerHTML = "";
	for (let i = 0; i < todo.length; i++) {
		let node = document.createElement("li");
		node.setAttribute("class", `"item"`);
		node.setAttribute("update-key", `"item${i}"`);
		node.innerHTML = `
		<small>Completion Date: ${todo[i].date}</small>
      <span><input type="text" id="item${i}" class="myinput" value="${todo[i].name}" /> </span>
      <hr/>
    `;
		// Append the element to the DOM as the last child of the element
		completeTaskList.append(node);
	}
}

//function mark tasks completed ,delete from todo and add in complete list
function completeTasks(id, i) {
	let complete = todoArr[i];
	deleteItem(id);
	compArr.push(complete);
	insertComp();
	display_comp();
}

// function to add Complete items to local storage
function insertComp() {
	localStorage.setItem("Comp List", JSON.stringify(compArr));
	addHTMLcomp(compArr);
}

// function to add todo items to local storage
function insertItem() {
	localStorage.setItem("Todo List", JSON.stringify(todoArr));
	addHTMLTodos(todoArr);
}

// function to get all items from local storage
function display() {
	let ref = localStorage.getItem("Todo List");
	// if reference exists
	if (ref) {
		todoArr = JSON.parse(ref);
		addHTMLTodos(todoArr);
	}
	display_comp();
}

//function to display completed list
function display_comp() {
	let g = localStorage.getItem("Comp List");
	if (g) {
		compArr = JSON.parse(g);
		addHTMLcomp(compArr);
	}
}
// function to delete item
function deleteItem(id) {
	for (let i = 0; i < todoArr.length; i++) {
		if (todoArr[i].id == id) {
			todoArr.splice(i, 1);
			// localStorage.removeItem(id);
		}
	}
	insertItem();
}

function editItem(id) {
	let el = document.getElementById("input_edit");
	el.value = todoArr[id].name;
	let el_object = todoArr[id];
	// document.getElementById("edit").style.display = "block";
	document.getElementById("edit").style.display = "block";
	document.getElementById("edit_form").onsubmit = function () {
		let edited_value = el.value;
		if (edited_value) {
			// alert(edited_value);
			changeName(todoArr[id].name, edited_value);
			// console.log(todoArr[id].name);
			addHTMLTodos(todoArr);
			document.getElementById("edit").style.display = "none";
		}
	};
	insertItem();
}

function changeName(value, edited) {
	for (var i in todoArr) {
		if (todoArr[i].name == value) {
			todoArr[i].name = edited;
			break;
		}
	}
}

display();

// Attach an event handler to the targeted element of the DOM.
incompleteTasksList.addEventListener("click", function (event) {
	// check if that is a delete-button
	if (event.target.classList.contains("deleteBtn")) {
		deleteItem(event.target.parentElement.getAttribute("dataKey"));
	}
});