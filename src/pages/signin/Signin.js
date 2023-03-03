/** @format */

import React from "react";
import Vlogo from "../../components/vlogo";
import Form from "../../components/form";
import frame from "../../assets/frame.png";
import "../signin/signin.css";
const Signin = () => {
	return (
		<div className="Signinitems">
			<div className="signinlft">
				<Vlogo />
				<Form />
			</div>
			<div className="signinrght">
				<img src={frame} alt="" />
			</div>
		</div>
	);
};

export default Signin;
