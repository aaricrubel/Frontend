import React from "react";
import { useState, useContext, createContext } from "react";

export const context = createContext({});

const wait = (time) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
};

export const AuthContext = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [loading, setLoading] = useState(false);
	const loginObj = {
		loggedIn: loggedIn,
		loading: loading,
		toggleLogin: () => {
			setLoading(true);
			wait(1000).then(() => {
				setLoggedIn(!loggedIn);
				setLoading(false);
			});
		},
	};
	return <context.Provider value={loginObj}>{children}</context.Provider>;
};
