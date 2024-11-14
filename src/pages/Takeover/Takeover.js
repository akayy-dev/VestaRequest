import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoggedOut from "../../components/LoggedOut/LoggedOut";
import NowPlaying from "../../components/NowPlaying/NowPlaying";
import Button from "../../components/Button/Button";
import "./Takeover.css";

export default function Takeover() {
	// handle token submission

	let [searchParams, setSearchParams] = useSearchParams();

	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const fetchAuthStatus = useCallback(async () => {
		try {
			const response = await fetch("http://localhost:8080/auth_status");
			const data = await response.json();
			setIsAuthenticated(data.data);
		} catch (error) {
			console.error("Error fetching auth status:", error);
			setIsAuthenticated(false);
		}
	}, []);

	const logout = useCallback(async () => {
		await fetch("http://localhost:8080/logout");
		window.location.reload();
	});

	useEffect(() => {
		const code = searchParams.get("code");
		if (code !== null) {
			// If the page gets a code from spotify.
			console.log(code);
			const URL = `http://localhost:8080/send_auth_token?code=${code}`;
			console.log("Submitting code");
			const response = fetch(URL).then((response) =>
				console.log(response.text())
			);
			
			// It's unsafe to leave the user with the token still in their omnibar,
			// this is because every time the user reloads the page after they login they will submit the code to their backend.
			// This line removes the code from their omnibar after submission.
			window.location.replace("http://localhost:3001/takeover")
		}
		// test before you push this.
		fetchAuthStatus();
	}, []);
	return (
		<div>
			{isAuthenticated ? (
				// This only shows if someone is authenticated
				<div className="nowplaying">
					<NowPlaying />
					<Button text="Logout" handleClick={logout} />
				</div>
			) : (
				// This only shows if no one is authenticated.

				// TODO: Make a takeover component.
				<div className="loggedout">
					<LoggedOut />
				</div>
			)}
		</div>
	);
}
