import Button from "@mui/joy/Button";
import "./RequestForm.css";
import {
	FormControl,
	FormLabel,
	Input,
	Typography,
} from "@mui/joy";
import { useState } from "react";

export default function RequestForm() {
	const [titleState, setTitleState] = useState("");
	const [artistState, setArtistState] = useState("");

	const handleTitleChange = (event) => {
		setTitleState(event.target.value);
	};

	const handleArtistChange = (event) => {
		setArtistState(event.target.value);
	};

	const handleSubmit = (event) => {
		const url = "http://localhost:8001";
		event.preventDefault();
		console.log(`${titleState} - ${artistState}`);
		const response = fetch(
			`${url}/request?title=${titleState}&artist=${artistState}`,
			{
				method: "POST",
			}
		)
			.then((response) => response.json())
			.then((data) => console.log(data));
		setArtistState("");
		setTitleState("");
	};

	return (
		<div className="App">
			<div className="form-container">
				<div className="header">
					<Typography level="h1">Request a Song</Typography>
					<Typography>
						Please no unreleased or leaked songs, they're not on Spotify.
					</Typography>
				</div>
				<form className="actual-form" onSubmit={handleSubmit}>
					<FormControl className="FormControl">
						<FormLabel>Song Title</FormLabel>
						<Input
							placeholder="Not Like Us"
							autoFocus={true}
							onChange={handleTitleChange}
						/>
						<FormLabel>Artist</FormLabel>
					</FormControl>
					<FormControl className="FormControl">
						<Input placeholder="Kendrick Lamar" onChange={handleArtistChange} />
						<br />
						<Button type="submit" className="submit-button">
							Request
						</Button>
					</FormControl>
				</form>
			</div>
		</div>
	);
}
