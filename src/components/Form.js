/** @format */
import Finput from "./Finputs";
import Data from "./Data";
 const Form = () => {
		const inputs = Data.map((item) => {
			return <Finput key={item.id} {...item} />;
		});
	return (
		<form action="">
			<div className="headertxt">
				<h3>Sign in</h3>
				<p>Welcome back! Please enter your details.</p>
			</div>
				{inputs}
		</form>
	);
};
export default Form;
