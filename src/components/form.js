/** @format */
import Finput from "./Finputs";
import Button from "./button";
import Social from "./social";
import Data from "./Data";
const Form = () => {
  const inputs = Data.map((item) => {
    return <Finput key={item.id} {...item} />;
  });
  return (
    <form action="" className="signin-form">
      <div className="formtop">
        <div className="header">
          <h1>Sign in</h1>
          <p>Welcome back! Please enter your details.</p>
        </div>
        {inputs}
        <Button />
      </div>
      <div className="formbottom">
        <Social />
      </div>
    </form>
  );
};
export default Form;
