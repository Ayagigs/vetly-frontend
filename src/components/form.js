/** @format */
import Social from "./social";
import axios from "axios";
import { useState } from "react";
const Form = () => {
	const url =
		"https://vetly-backend-production.up.railway.app/api/v1/auth/login";

	const [data, setData] = useState({
		email: "",
		password: "",
		user_type: "applicant"
	});

	const submit = (e) => {
		e.preventDefault();
		axios
			.post(url, data)
			.then((res) => {
				console.log(res.data);
			});
		console.log(data);
	};

	const postUser = (e) => {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(newData);
	};

	return (
		<form action="" className="signin-form" onSubmit={(e) => submit(e)}>
			<div className="formtop">
				<div className="header">
					<h1>Sign in</h1>
					<p>Welcome back! Please enter your details.</p>
				</div>
				{/* Email input element*/}
				<label className="form-label">
					<h2>Email</h2>
				</label>
				<input
					className="form-label"
					onChange={(e) => postUser(e)}
					id="email"
					value={data.email}
					type="email"
					placeholder="Enter email"
					required
				/>
				{/* password=input element */}
				<label className="form-label">
					<h2>Password</h2>
				</label>
				<input
					className="form-label"
					onChange={(e) => postUser(e)}
					id="password"
					value={data.password}
					type="password"
					placeholder="Enter password"
				/>
				<button>Sign in</button>
			</div>
			<div className="formbottom">
				<Social />
			</div>
		</form>
	);
};
export default Form;
