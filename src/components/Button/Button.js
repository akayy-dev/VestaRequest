import "./Button.css";

// TODO: Add onclick function
export default function Button({text, handleClick }) {
	return (
		<div className="btn cursor-pointer" onClick={() => handleClick()}>
			<strong>{text}</strong>
		</div>
	);
}
