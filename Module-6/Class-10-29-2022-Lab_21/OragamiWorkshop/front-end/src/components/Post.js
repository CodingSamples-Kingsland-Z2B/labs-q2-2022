import bluBird from "../images/blue-bird.png"

function Post(props) {
	return (
		<div className="Post">
			<img src={bluBird} alt="blue oragami bird"/>
			<p className="description">{props.description}</p>
            <div>
				<span>
					<small>Author:</small>
					{props.author}
				</span>
			</div>
		</div>
	);
}

export default Post;
