import {  useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { userRegister } from "../services";
//todd: add in the Register service
function Register(props) {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");
	function submitHandler(event) {
		event.preventDefault();
		let hasError = false;
		if(username.length === 0){
			hasError =true;
			console.log("add username");
		}
		if(password.length === 0){
			hasError =true;
			console.log("add password");
		}
		if(password !== rePassword){
			hasError =true;
			console.log("Passwords must match");
		}
		if (!hasError) {
			userRegister({
				username,
				password,
				rePassword
			}).then((data) => {
				console.log(data.id);
				// if(data.id){
					console.log("navigate to user login");
					navigate("/user/login");
				// }else{
				// 	console.log("user creation was not successful");
				// }
			});
		} else {
			console.log("There was an error, fix and try again");
		}
	}
	useEffect(()=>{
		if (props.loggedIn) {
			return navigate("/");
		}
	})
	
	return (
		<div className="Register">
			<h1>Register Page</h1>
			<form onSubmit={submitHandler}>
				<div className="form-control">
					<label>Username:</label>
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
					<label>Repeat Password:</label>
					<input
						type="password"
						value={rePassword}
						name="rePassword"
						onChange={(e) => {
							//console.log(e.target.value);
							setRePassword(e.target.value);
						}}
					/>
				</div>
				<div className="form-control">
					<button type="submit">Register</button>
				</div>
			</form>
		</div>
	);
}

export default Register;
