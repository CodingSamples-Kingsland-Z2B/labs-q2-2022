import { Link } from "react-router-dom";
import whiteBird from "../images/white-bird.png";

function Navigation(props) {
	let loggedIn = props.loggedIn;
	let currentRoutes = [];
	if (loggedIn) {
		currentRoutes = [
			<li className="listItem">
				<Link to="/add/origami">Post</Link>
			</li>,
			<li className="listItem">
				<Link to="/user/profile">Profile</Link>
			</li>,
			<li className="listItem">Log Out</li>,
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
		<nav className="Navigation">
			<ul>
				<li className="listItem">
					<Link to="/">
						<img src={whiteBird} alt="a white oragami bird" />
					</Link>
				</li>

				{currentRoutes}
			</ul>
		</nav>
	);
}

export default Navigation;
