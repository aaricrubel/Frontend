const todoContainer = document.querySelector("#todo-container");
const inputField = document.querySelector("#input-field");
const addBtn = document.querySelector(".btn");
let todoItems = {};
let count = 0;

let initialrender = () => {
	let todos = localStorage.getItem("todos");
	todoContainer.innerHTML = todos;
	todoContainer.addEventListener("dblclick", removeItem);
};

let removeItem = (item) => {
	console.log(item);
	delete todoItems[item.target.getAttribute("name")];
	console.log(item.target.getAttribute("name"));
	item.target.remove();
	localStorage.setItem("todos", todoContainer.innerHTML);
};

let render = (e) => {
	if (e.key === "Enter" || e.target.name === "plusBtn") {
		const div = document.createElement("div");
		div.innerHTML = inputField.value;
		div.classList.add("todo-item");
		div.setAttribute("name", count);
		todoContainer.appendChild(div);
		inputField.value = "";
		todoItems[count] = div.innerHTML;
		count++;
		div.addEventListener("dblclick", removeItem);
		div.addEventListener("click", (e) => {
			e.target.classList.toggle("check");
		});
		localStorage.setItem("todos", todoContainer.innerHTML);
	}
};

addBtn.addEventListener("click", render);
inputField.addEventListener("keydown", render);
