import "./NowPlaying.css";
import { useEffect, useState } from "react";

export default function NowPlaying() {
	const [finishedLoading, SetfinishedLoading] = useState(false); // used to track if fetching the API is finished.
	const [isPlaying, setIsPlaying] = useState(false); // used to track if the user isn't playing anything
	const [connectedUser, setConnectedUser] = useState("");
	const [albumArt, setAlbumArt] = useState("");
	const [songTitle, setSongTitle] = useState("");
	const [songArtist, setSongArtist] = useState("");
	const [upNext, setUpNext] = useState("");

	const setStates = () => {
		try {
			console.log(finishedLoading);
			const response = fetch("http://localhost:8080/current")
				.then((response) => response.json())
				.then((json) => {
					if (json.isPlaying == false) {
						// if nothing is playing
						console.log("Nothing is playing");
						setIsPlaying(false);
					} else {
						setAlbumArt(json.nowPlaying.albumArt);
						setSongTitle(json.nowPlaying.title);
						setSongArtist(json.nowPlaying.artist);
						setUpNext(json.upNext.title);
						setIsPlaying(true);
					}
					setConnectedUser(json.connectedUser);
					SetfinishedLoading(true);
				});
		} catch (error) {
			console.error("Error fetching auth status:", error);
		}
	};

	useEffect(() => {
		setStates();
	}, []);

	return (
		// TODO: If isPlaying is false, reduce the height of the window to 148px.
		<div
			className={`container glasscontainer  ${isPlaying ? "" : "h-[148px]"}`}
		>
			<div className={`nowplaying`}>
				{finishedLoading ? (
					isPlaying ? (
						<>
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
						</>
					) : (
						<>
							<p>
								<strong>{connectedUser}</strong> is connected but isn't playing
								anything right now.
							</p>
						</>
					)
				) : (
					<p>Loading...</p>
				)}
			</div>
		</div>
	);
}
