import "./verify.css"
import Logo from "../../components/logo"
import Input from "../../components/input";
const Verify = (props) => {
  return (
		<div className="verifymsg">
			<Logo />
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

				<a className="lgpage" href="/">Return to login page</a>
			</div>
		</div>
	);
}
export default Verify