import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useUpdateLogger from "./useUpdateLogger";

function App() {
	const [value, setvalue] = useState("name");
	useUpdateLogger(value);
	return (
		<div className="App">
			<h1>Custom Hooks</h1>
			<input
				type="text"
				className="inp"
				value={value}
				onChange={(e) => {
					setvalue(e.target.value);
				}}
			/>
			<h3>Check Console for Custom Hooks in Action</h3>
		</div>
	);
}

export default App;
