import "./App.css";
import {Routes,Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Input from "./components/Input"
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import FourOhFour from "./components/FourOhFour"
import Footer from "./components/Footer";

/* TODO:
	0: add a cookie checker to react
	1. Check for login (checking the cookies or loacl storage)
	2. set the logged in value (true or false) into a state variable
	3.pass the value or logged in to the different routes and the navigation pages
	4.pass the update state function to the navigation componenets so that when the log out button is clicked we can update the state to logged in == false

*/
function App() {
	return (
		<div className="App">
			<Navigation loggedIn ={false} />
			<div className="Container">
				<Aside />
				<Routes>
					<Route path="/" element={<Main/>}/>
					<Route path="/add/origami" element={<Input/>}/>
					<Route path="/user/register" element={<Register/>}/>
					<Route path="/user/login" element={<Login/>}/>
					<Route path="/user/profile" element={<Profile/>}/>
					<Route path="*" element={<FourOhFour/>}/>
				</Routes>	
			</div>
			<Footer />
		</div>
	);
}

export default App;
