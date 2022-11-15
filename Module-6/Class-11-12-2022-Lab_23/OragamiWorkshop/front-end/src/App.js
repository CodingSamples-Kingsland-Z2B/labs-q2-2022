import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Input from "./components/Input";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import FourOhFour from "./components/FourOhFour";
import Footer from "./components/Footer";

/* TODO:
	0: add a cookie checker to react
	1. Check for login (checking the cookies or loacl storage)
	2. set the logged in value (true or false) into a state variable
	3.pass the value or logged in to the different routes and the navigation pages
	4.pass the update state function to the navigation componenets so that when the log out button is clicked we can update the state to logged in == false

*/
function App(props) {
	const [cookies, setCookie, removeCookie] = useCookies(["x-auth-token"]);
	const [userId, setUserId] = useState("");
	const [loggedIn, setLoggedIn] = useState(
		cookies["x-auth-token"] ? true : false
	);
	
	//console.log(cookies["x-auth-token"]);
	console.log(loggedIn);
	console.log(userId);
	return (
		<div className="App">
			<Navigation
				loggedIn={loggedIn}
				removeCookie={removeCookie}
				setLoggedIn={setLoggedIn}
				setUserId={setUserId}
			/>
			<div className="Container">
				<Aside loggedIn={loggedIn} removeCookie={removeCookie}
				setLoggedIn={setLoggedIn}
				setUserId={setUserId}/>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route
						path="/add/origami"
						element={<Input loggedIn={loggedIn} cookie={cookies["x-auth-token"]} userId={userId}/>}
					/>
					<Route
						path="/user/register"
						element={<Register loggedIn={loggedIn} />}
					/>
					<Route
						path="/user/login"
						element={
							<Login
								loggedIn={loggedIn}
								setLoggedIn={setLoggedIn}
								setCookie={setCookie}
								setUserId={setUserId}
							/>
						}
					/>
					<Route
						path="/user/profile"
						element={<Profile loggedIn={loggedIn} userId={userId} />}
					/>
					<Route path="*" element={<FourOhFour />} />
				</Routes>
			</div>
			<Footer loggedIn={loggedIn} removeCookie={removeCookie}
				setLoggedIn={setLoggedIn}
				setUserId={setUserId}/>
		</div>
	);
}

export default App;
