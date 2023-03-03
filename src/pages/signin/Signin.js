/** @format */

import React from "react";
import Logo from "../../components/Logo";
import Form from "../../components/form";
import frame from "../../assets/frame.png";
import "../signin/signin.css";
const Signin = () => {
	return (
		<div className="Signinitems">
			<div className="signinlft">
				<Logo />
				<Form />
			</div>
			<div className="signinrght">
				<img src={frame} alt="" />
			</div>
		</div>
	);
};

export default Signin;
