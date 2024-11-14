import { useCallback, useEffect, useState } from "react";
import LoggedOut from "../../LoggedOut/LoggedOut";
import NowPlaying from "../../NowPlaying/NowPlaying";
import Button from "../../Button/Button";

export default function Takeover() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const fetchAuthStatus = useCallback(async () => {
		try {
			const response = await fetch("http://localhost:8080/auth_status");
			const data = await response.json();
			setIsAuthenticated(data.data);
			console.log(isAuthenticated);
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
		fetchAuthStatus();
	}, []);
	return (
		<div className="App">
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
