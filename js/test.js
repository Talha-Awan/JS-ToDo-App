// let checked;
// if (todo[i].completed == true) {
//     checked = "checked";
// } else {
//     checked = "";
// }

// if (todo[i].completed === true) {
//     node.classList.add("checked");
// }
// <button class="btn btn-success updateBtn">Edit</button>

// toggle the value to completed and not completed
// function toggle(id) {
//     for (let i = 0; i < todos.length; i++) {
//         if (todos[i].id == id) {
//             // toggle the value
//             todos[i].completed = true;
//         }
//     }
//     insertItem(todos);
// }

// Select the entire list
// Add a click event listener to the list and its children
// tasksList.addEventListener("click", (event) => {
//     if (event.target.classList.contains("t-tick")) {
//         let itemKey = event.target.parentElement.dataset.key;
//         toggleDone(itemKey);
//     }
// });

// function updateItem(id) {
//     document.addEventListener("DOMContentLoaded", function (event) {
//         document.getElementById("item1").disabled = false;
//     });
//     console.log(id);
//     for (let i = 0; i < todos.length; i++) {
//         let newval;
//         if (todos[i].id == id) {
//             document.addEventListener("DOMContentLoaded", function (event) {
//                 newval = document.getElementById(`"item${i}"`).value;
//                 // console.log(todos[i]);
//                 // console.log(id);
//                 todos[i].name = newval; //"nawa string";
//             });
//             // First all dom loads then this function runs otherwise null

//             // document.getElementById(`"item${i}"`).removeAttribute("disabled");
//             // todos[i].name = document.getElementById(`"item${i}"`).value;
//             // document.getElementById(`"item${i}"`).setAttribute("disabled", "disabled");
//             //   });
//             // console.log(`"item${i}"`);
//         }
//         // console.log(`"item${i}"`);
//         console.log(todos[i].name);
//     }
//     insertItem(todos);
// }

// // check if that is a update-button
// if (event.target.classList.contains("updateBtn")) {
//     updateItem(event.target.parentElement.getAttribute("data-key"));
// }
