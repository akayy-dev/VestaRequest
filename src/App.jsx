import logo from "./logo.svg";
import "./App.css";
import RequestForm from "./components/RequestForm/RequestForm";
import PlaylistEmbed from "./components/PlaylistEmbed/PlaylistEmbed";

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="flex">
					<RequestForm />
					<PlaylistEmbed />
				</div>
			</div>
		</div>
	);
}

export default App;
