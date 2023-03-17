/** @format */

// icon
import { Link } from "react-router-dom";
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

      <Link to="/forgot-password" className="forgottenpaswrd">
        Forgot password?
      </Link>

      <p className="crtaccnt">
        Don’t have an account?
        <span>
          <Link to="/sign-up">create an account</Link>
        </span>
      </p>
    </>
  );
};
export default Social;
