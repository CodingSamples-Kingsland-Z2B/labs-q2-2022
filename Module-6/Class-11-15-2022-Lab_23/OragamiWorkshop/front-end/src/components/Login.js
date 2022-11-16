import { useState } from "react";
import { Navigate } from "react-router-dom";
import { userLogin } from "../services";
//todd: add in the login service
function Login(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	if (props.loggedIn) {
		return <Navigate to="/user/profile" replace={true} />;
	}

	function submitHandler(event) { 
		event.preventDefault();
		let hasError = false;
		if (username.length === 0) {
			//error
			console.log("no username");
			hasError = true;
		}
		if (password.length === 0) {
			//error
			console.log("no password");
			hasError = true;
		}

		if (!hasError) {
			userLogin({
				username,
				password,
			}).then((data) => {
				console.log(data);
				console.log(props.loggedIn);
				props.setCookie(data.cookie.name, data.cookie.token, {
					path: "/",
					maxAge: 60*60 ,
				});
				props.setLoggedIn(true);
				props.setUserId(data.id);
			});
		} else {
			console.log("There was an error, fix and try again");
		}
	}
	return (
		<div className="Login">
			<h1>Login Page</h1>
			<form onSubmit={submitHandler}>
				<div className="form-control">
					<label>UserName:</label>
					<input
						type="text"
						value={username}
						name="username"
						onChange={(e) => {
							//console.log(e.target.value);
							setUsername(e.target.value);
						}}
					/>
				</div>
				<div className="form-control">
					<label>Password:</label>
					<input
						type="password"
						value={password}
						name="password"
						onChange={(e) => {
							//console.log(e.target.value);
							setPassword(e.target.value);
						}}
					/>
				</div>
				<div className="form-control">
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
