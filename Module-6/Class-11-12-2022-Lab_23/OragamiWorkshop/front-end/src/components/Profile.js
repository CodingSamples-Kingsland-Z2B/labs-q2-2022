import { useState } from "react";
import { Navigate } from "react-router-dom";
import profileImage from "../images/profile-default.jpg";
import Post from "./Post";

function Profile(props) {
	//fetch will happen (use effect)or in a higher component
	const [username, setUsername] = useState("");
	const [posts, setPosts] = useState(0);
	//for the posts we will fetch the user's posts
	//Remove the most recent 3
	//add the posts to the page with a .map() or another dynamic building operation
	if (!props.loggedIn) {
		return <Navigate to="/user/login" replace={true} />;
	}
	return (
		<div className="Profile">
			<img src={profileImage} alt="profile photo" />
			<div className="personal-info">
				<p>
					<span>Username:</span>
					{username}
				</p>
				<p>
					<span>Posts:</span>
					{posts}
				</p>
			</div>
			<div>
				<h2>Your 3 most recent posts</h2>
				<Post
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit consequatur veritatis reprehenderit quo nihil fuga libero natus voluptate perspiciatis, sit magni, illum, laudantium quos asperiores maxime aspernatur omnis odit!"
					author="random"
				/>
				<Post
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit consequatur veritatis reprehenderit quo nihil fuga libero natus voluptate perspiciatis, sit magni, illum, laudantium quos asperiores maxime aspernatur omnis odit!"
					author="random"
				/>
				<Post
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit consequatur veritatis reprehenderit quo nihil fuga libero natus voluptate perspiciatis, sit magni, illum, laudantium quos asperiores maxime aspernatur omnis odit!"
					author="random"
				/>
			</div>
		</div>
	);
}

export default Profile;
