import React, { useContext } from "react";
import { context } from "../../context";

const Home = () => {
	const logger = useContext(context);
	return (
		<div className="Home">
			<h1 style={{ margin: "1rem" }}>Home</h1>
			<h3 style={{ margin: "1rem" }}>
				Cannot access profile and dashboard without login
			</h3>
			{logger.loading ? (
				<h3>Loading....</h3>
			) : (
				<button
					style={{ cursor: "pointer", padding: "0.5rem" }}
					onClick={() => {
						logger.toggleLogin();
					}}
				>
					{logger.loggedIn ? "Logout" : "Login"}
				</button>
			)}
		</div>
	);
};

export default Home;
