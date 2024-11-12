import './Button.css'


// TODO: Add onclick function
export default function Button({text}) {
	return (
		<div className="btn cursor-pointer">
			{text}
		</div>
	)
}