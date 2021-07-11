import React from "react";
import Column from "../Column/Column";
import "./Row.css";

function Row() {
	return (
		<div className="row">
			{new Array(8).fill().map(() => {
				return <Column />;
			})}
		</div>
	);
}

export default Row;
