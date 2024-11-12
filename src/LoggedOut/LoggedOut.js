import Button from "../Button/Button";
import "./LoggedOut.css";

export default function LoggedOut() {
	const fetchTakeoverURL =  () => {
		try {
			const response = fetch("http://localhost:8080/get_auth_url")
				.then((response) => response.text())
				.then((data) => window.location.href = data);
		} catch (e) {
			console.log("Error fetching auth URL:", e);
		}
	};

	return (
		<div className="loggedout">
			<div className="glassbox">
				<div className="inner">
					<div className="header">
						<strong> No one is playing anything!</strong>
					</div>
					<div className="text">
						<p>Hit the Takeover button to get started</p>
					</div>
				</div>
			</div>
			<Button text={"Takeover"} handleClick={fetchTakeoverURL}/>
		</div>
	);
}
