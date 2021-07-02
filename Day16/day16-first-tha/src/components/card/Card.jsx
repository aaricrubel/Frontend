import React from "react";
import "./Card.css";

function Card() {
	return (
		<div className="card">
			<img
				src="https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png"
				alt="meme"
				className="meme"
			/>
			<h2>React Card</h2>
			<p>Your main THA is to make meme cards</p>
		</div>
	);
}

export default Card;
