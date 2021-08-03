import React, { useState } from "react";
import "./App.css";
import TailwindOne from "../components/TailwindOne/TailwindOne";
import BootstrapOne from "../components/BootstrapOne/BootstrapOne";

function App() {
	return (
		<div className="App">
			<TailwindOne />
			<br />
			<BootstrapOne />
		</div>
	);
}

export default App;
