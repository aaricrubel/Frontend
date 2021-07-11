import React, { useState } from "react";
import "./App.css";
import StateButton from "./components/stateButton/StateButton";

function App() {
	return (
		<div className="App">
			<h1>Below are four states</h1>
			<StateButton />
			<StateButton />
			<StateButton />
			<StateButton />
		</div>
	);
}

export default App;
