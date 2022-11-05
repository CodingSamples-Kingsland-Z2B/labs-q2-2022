import Link from "./Link";
import blueBirdReversed from "../images/blue-bird-flipped.png"

function Footer() {
	return (
        <footer className="Footer">
            <ul>
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
                <li className="listItem">
				    <img src={blueBirdReversed} height= "80px"/>
                </li>
                <p>copywrite Patrick Coding Adventures &#169;2022</p>
			</ul>
        </footer>
    );
}

export default Footer;