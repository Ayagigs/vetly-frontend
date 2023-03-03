/** @format */

import Input from "./input";
import data from "../components/Data";
import Button from "./button";
import Social from "./social";
const Form = (props) => {
	const inputItems = data.map((item) => {
		return <Input key={item.id} {...item} />;
	});
	return (
		<form>
      <div className="formtop">
			<div className="header">
				<h1>Sign in</h1>
				<p>Welcome back! Please enter your details.</p>
			</div>
			<div className="inputs">{inputItems}</div>
			<Button />
      </div>
      <div className="formbottom">
        <Social/>
      </div>
		</form>
	);
};
export default Form;
