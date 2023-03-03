/** @format */

// icon
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import Line from "./line";
const Social = () => {
	return (
		<>
			<p>
				<span>
					<Line />
				</span>
				or
				<span>
					<Line />
				</span>
			</p>
			<div className="socialbtn">
				<div className="Gbutton">
					<button>
						<span>
							<img src={google} alt="" />
						</span>
						Sign up with Google
					</button>
				</div>
				<div className="Fbuttons">
					<button>
						<span>
							<img src={facebook} alt="" />
						</span>
						Sign up with Facebook
					</button>
				</div>
			</div>

			<a href="/" className="forgottenpaswrd">Forgot password?</a>

			<p className="crtaccnt">
				Don’t have an account?
				<span>
					<a href="/">create an account</a>
				</span>
			</p>
		</>
	);
};
export default Social;
