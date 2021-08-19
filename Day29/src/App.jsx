import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import { useSelector } from "react-redux";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App() {
	const theme = useSelector((state) => state.theme);
	return (
		<div className={theme ? "App dark" : "App"}>
			<ThemeToggle />
			<Form />
			<WeatherCard />
		</div>
	);
}

export default App;
