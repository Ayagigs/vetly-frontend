/** @format */

import "./verify.css";
import Vlogo from "../../components/vlogo";
import Input from "../../components/input";
const ForgotPassword = (props) => {
	return (
		<div className="verifymsg">
			<Vlogo />
			<div className="msgitem">
				<div className="msghdr">
					<h2>Reset your password</h2>
					<p>Enter your email to reset your password</p>
				</div>
				<div className="msginput">
					<label>
						<p>Email</p>
						<Input placeholder="Enter email" />
					</label>
				</div>

				<div className="msgbtn">
					<button>Continue</button>
				</div>

				<a className="lgpage" href="/">
					Return to login page
				</a>
			</div>
		</div>
	);
};
export default ForgotPassword;
