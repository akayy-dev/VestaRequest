import Button from "../Button/Button";
import "./LoggedOut.css";

export default function LoggedOut() {
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
			<Button text={"Takeover"} />
		</div>
	);
}
