import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import { AuthContext } from "./context";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<AuthContext>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/profile" component={Profile} />
					<Route path="/dashboard" component={Dashboard} />
				</AuthContext>
			</Router>
		</div>
	);
}

export default App;
