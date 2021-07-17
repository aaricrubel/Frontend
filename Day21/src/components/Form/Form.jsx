import React, { useState } from "react";
import "./Form.css";

const Form = ({ state, setState }) => {
	const [userInput, setUserInput] = useState({ item: "", calorie: "" });
	return (
		<>
			<form className="form">
				<input
					type="text"
					name="itemName"
					id="itemName"
					required
					onChange={(e) => {
						setUserInput({ ...userInput, item: e.target.value });
					}}
					placeholder="Item Name"
					value={userInput.item}
				/>
				<input
					type="number"
					name="calorieAmt"
					id="calorieAmt"
					required
					placeholder="Calorie Amount"
					onChange={(e) => {
						setUserInput({
							...userInput,
							calorie: Number(e.target.value),
						});
					}}
					value={userInput.calorie}
				/>
			</form>
			<div className="button-container">
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						setState([...state, userInput]);
					}}
					type="button"
					class="btn btn-primary"
				>
					Add Item
				</button>
			</div>
		</>
	);
};

export default Form;
