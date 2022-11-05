import Link from "./Link";
import whiteBird from "../images/white-bird.png";

function Navigation() {
	return (
		<nav className="Navigation">
			<ul>
				<li className="listItem">
					<a href="#">
						<img src={whiteBird} />
					</a>
				</li>
				<Link text="going to 1" />
				<Link text="going to 2" />
				<Link text="going to 3" />
				<Link text="going to 4" />
				<Link text="going to 5" />
				<Link text="going to 6" />
				<Link text="going to 7" />
				<Link text="going to 8" />
				<Link text="going to 9" />
				<Link text="going to 10" />
				<Link text="going to 11" />
			</ul>
		</nav>
	);
}

export default Navigation;
