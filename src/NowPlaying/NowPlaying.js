import "./NowPlaying.css";
import { useEffect, useState } from "react";

export default function NowPlaying() {
	const [connectedUser, setConnectedUser] = useState("ahaduk");
	const [albumArt, setAlbumArt] = useState("");
	const [songTitle, setSongTitle] = useState("Starboy");
	const [songArtist, setSongArtist] = useState("The Weeknd");
	const [upNext, setUpNext] = useState("Die For You");

	const setStates = () => {
		try {
			const response = fetch("http://localhost:8080/current")
				.then((response) => response.json())
				.then((data) => {
					console.log("HI");
					setAlbumArt(data.data[0].albumArt);
					setSongTitle(data.data[0].title);
					setSongArtist(data.data[0].artist);
					setUpNext(data.data[1].title);
				});
		} catch (error) {
			console.error("Error fetching auth status:", error);
		}
	};

	useEffect(() => {
		setStates();
	}, []);

	return (
		// TODO: Implement some sort of "loading" screen.
		<div className="container glasscontainer">
			<div className="nowplaying">
				<img src={albumArt} className="albumart" />
				<span className="nowplayingtext">
					<p>
						<strong>{connectedUser}</strong> is playing{" "}
						<strong>{songTitle}</strong> by <strong>{songArtist}</strong>
					</p>

					<p className="upnext">
						Up Next: <strong>{upNext}</strong>
					</p>
				</span>
			</div>
		</div>
	);
}
