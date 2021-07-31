import React from "react";
import { userReducer } from "../../reducer/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateEmail } from "../../action/action";

const Input = () => {
	const state = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Input</h1>
			<label htmlFor="username">Username:</label>
			<input
				type="text"
				placeholder="Name"
				id="username"
				value={state.name}
				onChange={(e) => dispatch(updateName(e.target.value))}
			/>
			<label htmlFor="email">Email:</label>
			<input
				type="text"
				placeholder="Email"
				id="email"
				value={state.email}
				onChange={(e) => dispatch(updateEmail(e.target.value))}
			/>
		</div>
	);
};

export default Input;
