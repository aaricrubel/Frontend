import React from "react";
import "./Box.css";
import Row from "../Row/Row";

function Box() {
	return (
		<div className="box">
			{new Array(8).fill().map(() => {
				return <Row />;
			})}
		</div>
	);
}

export default Box;
