import { Link } from "react-router-dom";

function Aside(props) {
	return (
		<aside className="Aside">
			<ul>
				<li className="listItem">
					<Link to="/add/origami">Post</Link>
				</li>
				<li className="listItem">
					<Link to="/user/register">Register</Link>
				</li>
				<li className="listItem">
					<Link to="/user/login">Login</Link>
				</li>
				<li className="listItem">
					<Link to="/user/profile">Profile</Link>
				</li>
			</ul>
		</aside>
	);
}

export default Aside;
