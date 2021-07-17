import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";

function App() {
	const [state, setState] = useState([]);
	function handleDelete(index) {
		setState(state.filter((val, idx) => idx !== index));
	}
	function handleEdit(val, idx) {
		const newState = state.map((value, index) =>
			index === idx ? val : value
		);
		setState(newState);
	}
	return (
		<div className="App">
			<Form state={state} setState={setState} />
			{state.length === 0 && <h3 className="mt-4">Start Adding Items</h3>}
			{state.map((obj, idx) => {
				return (
					<Card
						item={obj.item}
						calorie={obj.calorie}
						index={idx}
						key={idx}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
					/>
				);
			})}
		</div>
	);
}

export default App;
