function Link(props) {
	return (
        <li className="listItem">
            <a href="#">{props.text}</a>
        </li>
    );
}

export default Link;