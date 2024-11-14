import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Takeover from "./pages/Takeover/Takeover";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/takeover" element={<Takeover />} />
			</Routes>
		</Router>
	);
}

export default App;
