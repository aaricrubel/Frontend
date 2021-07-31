import React, { useState } from "react";
import "./App.css";
import Data from "./components/Data/Data";
import Input from "./components/Input/Input";

function App() {
	return (
		<div className="App">
			<h1>Hello</h1>
			<Input />
			<Data />
		</div>
	);
}

export default App;
