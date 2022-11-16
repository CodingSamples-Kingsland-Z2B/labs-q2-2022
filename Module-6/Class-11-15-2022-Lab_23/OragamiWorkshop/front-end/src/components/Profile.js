import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getUserOrigami, getUser } from "../services";
import profileImage from "../images/profile-default.jpg";
import Post from "./Post";

function Profile(props) {
	//fetch will happen (use effect)or in a higher component
	const [username, setUsername] = useState("");
	const [postNum, setPostNum] = useState(0);
	const [posts, setPosts] = useState([]);
	//for the posts we will fetch the user's posts
	//Remove the most recent 3
	//add the posts to the page with a .map() or another dynamic building operation
	function runFetch() {
		getUserOrigami({
			id: props.userId,
		}).then((data) => {
			console.log(data);
			getUser({
				id: props.userId,
			}).then((user) => {
				console.log(data);
				setPostNum(data.length);
				setUsername(user.username);
				data = data.reverse().slice(0, 3);
				data = data.map(item=>{
					item.author = user.username;
					return item;
				});

				console.log(data);
				let newData = JSON.stringify(data);
				let oldData = JSON.stringify(posts);
				if (oldData !== newData) {
					setPosts(data);
				}
			});
		});
	}
	
	useEffect(() => {
		console.log("searched");
		runFetch();
	}, []);

	if (!props.loggedIn) {
		return <Navigate to="/user/login" replace={true} />;
	}
	const postsArray = posts.map((post,index) => {
		return (
			<Post
				key={post._id}
				index={index+1}
				description={post.description}
				author={post.author}
			/>
		);
	});
	return (
		<div className="Profile">
			<img src={profileImage} alt="profile" />
			<div className="personal-info">
				<p>
					<span>Username: </span>
					{username}
				</p>
				<p>
					<span>Posts: </span>
					{postNum}
				</p>
			</div>
			<div>
				<h2>Your 3 most recent posts</h2>
				{postsArray}
			</div>
		</div>
	);
}

export default Profile;
