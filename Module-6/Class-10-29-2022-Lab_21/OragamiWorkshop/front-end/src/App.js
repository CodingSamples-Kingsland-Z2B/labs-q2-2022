import "./App.css";
import Navigation from "./components/Navigation";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Navigation />
			<div className="Container">
				<Aside />
				<Main />
			</div>
			<Footer />
		</div>
	);
}

export default App;
