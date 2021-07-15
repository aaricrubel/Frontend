import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import data from "./data.json";

function App() {
	const [arr, setArr] = useState(data);
	const handleDelete = (index) => {
		const newArr = arr.filter((val, idx) => idx !== index);
		setArr(newArr);
	};
	return (
		<div className="App">
			<h1>Calorie Read Only</h1>
			<div className="container">
				{arr.map((arr, idx) => {
					return (
						<Card
							key={idx}
							arr={arr}
							idx={idx}
							handleDelete={handleDelete}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
