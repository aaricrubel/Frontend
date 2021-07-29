import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { context } from "../../context";

const Profile = () => {
	const logger = useContext(context);
	return (
		<div className="Profile">
			{logger.loggedIn ? (
				<h1>Profile: Private Route</h1>
			) : (
				<Redirect to="/" />
			)}
		</div>
	);
};

export default Profile;
