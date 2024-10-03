import { Button, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Takeover() {
	const [authStatus, setAuthStatus] = useState(false);
	const [authURL, setAuthURL] = useState();

	let [params] = useSearchParams();
	const code = params.get("code");

	const BACKEND_URL = "http://localhost:8080";

	const fetchAuthStatus = () => {
		console.log("Attemping to fetch auth status");
		const response = fetch(`${BACKEND_URL}/auth_status`)
			.then((res) => res.json())
			.then((data) => setAuthStatus(data["data"]));
	};

	const getAuthURL = () => {
		console.log("Attemping to fetch auth url");
		const response = fetch(`${BACKEND_URL}/get_auth_url`)
			.then((res) => res.text())
			.then((url) => setAuthURL(url));
	};

	const submitAuthToken = () => {
		console.log("Attemping to submit auth code");
		const response = fetch(`${BACKEND_URL}/send_auth_token?code=${code}`)
			.then((res) => res.text())
			.then((result) => console.log(`Status - ${result}`));
	};

	useEffect(() => {
		fetchAuthStatus();
		// get spotify auth url
		getAuthURL();
		// send an authorization code to spotify
		if (code && !authStatus) {
			submitAuthToken();
		}
	}, []);

	if (authStatus) {
		// if the user is authenticated
		return (
			<div className="App">
				<div className="form-container">
					<Typography level="h1">Takeover</Typography>
					<Typography level="h2">User is connected</Typography>
					<Button
						onClick={() => {
							window.location = authURL;
						}}
					>
						Takeover
					</Button>
				</div>
			</div>
		);
	} else {
		return (
			<div className="App">
				<div className="form-container">
					<Typography level="h1">Takeover</Typography>
					<Typography level="h2">No one is connected.</Typography>
					<Button
						onClick={() => {
							window.location = authURL;
						}}
					>
						Takeover
					</Button>
				</div>
			</div>
		);
	}
}
