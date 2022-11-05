import Post from "./Post";

function Input() {
	return (
		<div className="Input">
			<h1> Share you thoughts...</h1>
            <textarea></textarea>
            <button>Post</button>
            {/* ToDo: add on click to button and send data to backend api */}

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

export default Input;
