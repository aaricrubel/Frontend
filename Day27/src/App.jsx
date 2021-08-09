import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import ListTodo from "./components/ListTodo/ListTodo";

function App() {
	return (
		<div className="App">
			<h1>Todo List</h1>
			<AddTodo />
			<ListTodo />
		</div>
	);
}

export default App;
