import React, { useContext } from "react";
import { context } from "../../context";

const About = () => {
	const logger = useContext(context);
	return (
		<div className="About">
			<h1>About: Public Route</h1>
			<p>{logger.loggedIn ? "Logged IN " : "Not Logged IN"}</p>
		</div>
	);
};

export default About;
