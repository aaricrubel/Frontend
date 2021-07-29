import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { context } from "../../context";

const Dashboard = () => {
	const logger = useContext(context);
	return (
		<div className="Dashboard">
			{logger.loggedIn ? (
				<h1>Dashboard: Private Route</h1>
			) : (
				<Redirect to="/" />
			)}
		</div>
	);
};

export default Dashboard;
