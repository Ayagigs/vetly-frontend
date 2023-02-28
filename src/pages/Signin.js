/** @format */

import React from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import "../App.css";
const Signin = () => {
	
	return (
		<section>
			<div className="signin-items">
				<div className="signinlft">
					<Logo />
					<Form />
				</div>
				<div className="signuprght"></div>
			</div>
		</section>
	);
};

export default Signin;
