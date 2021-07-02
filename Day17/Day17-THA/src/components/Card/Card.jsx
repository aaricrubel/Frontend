import React from "react";
import "./Card.css";
function Card({ props }) {
	return (
		<div className="card">
			<h2>{props.food}</h2>
			<h3>You have consumed {props.calorie} cals today</h3>
		</div>
	);
}

export default Card;
