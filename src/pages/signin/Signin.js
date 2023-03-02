/** @format */

import React from "react";
import Logo from "../../components/logo";
import Form from "../../components/form";

import "../signin/signin.css";
const Signin = () => {
	return (
		<div className="Signinitems">
			<div className="signinlft">
				<Logo />
				<Form />
			</div>
			<div className="signinrght"></div>
		</div>
	);
};

export default Signin;
