import "./NowPlaying.css";

export default function NowPlaying() {
	let connectedUser = "ahaduk";
	let songTitle = "Starboy";
	let songArtist = "The Weeknd";
	let upNext = "Die For You";
	return (
		<div className="container glassbox">
			<div className="nowplaying">
				<img
					src="https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"
					className="albumart"
				/>
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
