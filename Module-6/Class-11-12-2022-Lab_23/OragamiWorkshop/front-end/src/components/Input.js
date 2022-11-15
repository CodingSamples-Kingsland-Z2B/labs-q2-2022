import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { addOrigami, getUserOrigami, getUser } from "../services";
import Post from "./Post";

function Input(props) {
	const [description, setDescription] = useState("");
	const [posts, setPosts] = useState([]);

	function runFetch() {
		getUserOrigami({
			id: props.userId,
		}).then((data) => {
			console.log(data);
			getUser({
				id: props.userId,
			}).then((user) => {
				console.log(data);
				data = data.reverse().slice(0, 3);
				data = data.map(item=>{
					item.author = user.username;
					return item;
				})
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
	function submitHandler(event) {
		event.preventDefault();
		let hasError = false;
		if (description.length === 0) {
			hasError = true;
			console.log("A description must be set");
		}
		if (!hasError) {
			addOrigami(
				{
					description,
				},
				props.cookie
			).then((data) => {
				//console.log(data);
				setDescription("");
				runFetch();
			});
		} else {
			console.log("There was an error, fix and try again");
		}
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
		<div className="Input">
			<h1> Share you thoughts...</h1>
			<form onSubmit={submitHandler}>
				{/* ToDo: add on click to button and send data to backend api */}
				<textarea
					value={description}
					onChange={(e) => {
						//console.log(e.target.value);
						setDescription(e.target.value);
					}}
				></textarea>
				<button>Post</button>
			</form>

			<div>
				<h2>Your 3 most recent posts</h2>
				{postsArray}
			</div>
		</div>
	);
}

export default Input;
