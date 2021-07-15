import React from "react";
import "./Card.css";
function Card({ arr, idx, handleDelete }) {
	return (
		<div className="card">
			<h2 style={{ display: "inline-block" }}>{arr.food}</h2>
			<button
				style={{ display: "inline-block", marginLeft: "10px" }}
				onClick={() => handleDelete(idx)}
			>
				Delete
			</button>
			<h3>You have consumed {arr.calorie} cals today</h3>
		</div>
	);
}

export default Card;
