import React, { useState } from "react";
import "./Card.css";

const Card = ({ item, calorie, handleDelete, index, handleEdit }) => {
	const [isInputVisible, setIsInputVisible] = useState(false);
	const [userInput, setUserInput] = useState({
		item: item,
		calorie: calorie,
	});
	return (
		<div className="card-container">
			{isInputVisible ? (
				<div className="edit-card">
					<input
						type="text"
						value={userInput.item}
						onChange={(e) => {
							setUserInput({
								...userInput,
								item: e.target.value,
							});
						}}
					/>
					<input
						type="number"
						value={userInput.calorie}
						onChange={(e) => {
							setUserInput({
								...userInput,
								calorie: Number(e.target.value),
							});
						}}
					/>
					<button
						onClick={() => {
							handleDelete(index);
						}}
						type="button"
						class="btn btn-danger mb-2"
					>
						Delete
					</button>
					<button
						onClick={() => {
							handleEdit(userInput, index);
							setIsInputVisible(!isInputVisible);
						}}
						type="button"
						class="btn btn-primary"
					>
						Done
					</button>
				</div>
			) : (
				<div className="card">
					<h2>{item}</h2>
					<h5>You have consumed {calorie} calories</h5>
					<button
						onClick={() => {
							handleDelete(index);
						}}
						type="button"
						class="btn btn-danger mb-2"
					>
						Delete
					</button>
					<button
						onClick={() => setIsInputVisible(!isInputVisible)}
						type="button"
						class="btn btn-primary"
					>
						Edit
					</button>
				</div>
			)}
		</div>
	);
};

export default Card;
