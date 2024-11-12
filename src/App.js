import "./App.css";
import { useEffect } from "react";
import NowPlaying from "./NowPlaying/NowPlaying";
import Button from "./Button/Button";
import { useCallback } from "react";
import { useState } from "react";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const fetchAuthStatus = useCallback(async () => {
		try {
			const response = await fetch("http://localhost:8080/auth_status");
			const data = await response.json();
			setIsAuthenticated(data.data);
			console.log("got");
		} catch (error) {
			console.error("Error fetching auth status:", error);
			setIsAuthenticated(false);
		}
	}, []);

	useEffect(() => {
		fetchAuthStatus();
	}, []);

	return (
		<div className="App">
			{isAuthenticated ? (
        // This only shows if someone is authenticated
				<div className="nowplaying">
					<NowPlaying />
					<Button text="Logout" />
				</div>
			) : (
        // This only shows if no one is authenticated.

        // TODO: Make a takeover component.
				<div></div>
			)}
		</div>
	);
}

export default App;
