import { useState } from "react";
//todd: add in the Register service
function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

	return (
		<div className="Register">
			<h1>Register Page</h1>
			<form>
				<div className="form-control">
					<label>Email:</label>
					<input
						type="text"
						value={email}
						name="email"
						onChange={(e) => {
							//console.log(e.target.value);
							setEmail(e.target.value);
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
