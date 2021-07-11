import React, { useState } from "react";

const stateButton = () => {
	const [count, setCount] = useState(0);
	return (
		<div style={{ display: "inline-block" }}>
			<button onClick={() => setCount(count + 1)}>{count}</button>
		</div>
	);
};

export default stateButton;
