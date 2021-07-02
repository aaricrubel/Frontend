import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import data from "./data.json";

function App() {
	return (
		<div className="App">
			<h1>Calorie Read Only</h1>
			<div className="container">
				{data.map((food, idx) => {
					return <Card props={food} key={idx} />;
				})}
			</div>
		</div>
	);
}

export default App;
