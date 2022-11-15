import { Link } from "react-router-dom";
import blueBirdReversed from "../images/blue-bird-flipped.png";

function Footer(props) {
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
		<footer className="Footer">
			<ul>
				{currentRoutes}
				<li className="listItem">
					<Link to="/">
						<img
							src={blueBirdReversed}
							
							alt="a blue origami bird"
						/>
					</Link>
				</li>
				<p>copywrite Patrick Coding Adventures &#169;2022</p>
			</ul>
		</footer>
	);
}

export default Footer;
