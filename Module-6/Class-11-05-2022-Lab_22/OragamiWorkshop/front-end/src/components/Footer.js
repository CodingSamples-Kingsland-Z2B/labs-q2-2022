import { Link } from "react-router-dom";
import blueBirdReversed from "../images/blue-bird-flipped.png";

function Footer(props) {
	return (
		<footer className="Footer">
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
				<li className="listItem">
					<Link to="/">
						<img
							src={blueBirdReversed}
							height="80px"
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
