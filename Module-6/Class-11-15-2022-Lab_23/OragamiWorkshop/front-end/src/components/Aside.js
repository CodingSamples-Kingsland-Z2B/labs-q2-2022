import { Link } from "react-router-dom";

function Aside(props) {
	let loggedIn = props.loggedIn;
	let currentRoutes = [];

	function clickHandler(event){
		console.log(window.location);
		props.setLoggedIn(false);
		props.removeCookie("x-auth-token",{path:'/'});
	}

	if (loggedIn) {
		currentRoutes = [
			<li className="listItem">
				<Link to="/add/origami">Post</Link>
			</li>,
			<li className="listItem">
				<Link to="/user/profile">Profile</Link>
			</li>,
			<li className="listItem">
				<p onClick={clickHandler}>Log Out</p>
			</li>,
		];
	} else {
		currentRoutes = [
			<li className="listItem">
				<Link to="/user/register">Register</Link>
			</li>,
			<li className="listItem">
				<Link to="/user/login">Login</Link>
			</li>,
		];
	}
	return (
		<aside className="Aside">
			<ul>
				{currentRoutes}
			</ul>
		</aside>
	);
}

export default Aside;
