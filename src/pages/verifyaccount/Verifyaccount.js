import React from "react";
import "./verifyaccount.css";
import verifylogo from "../../assets/verifylogo.png";
import { Link } from "@chakra-ui/react";

const Verifyaccount = () => {
  return (
    <div className="verify-parent">
      <div className="center verifylogo-container">
        <img src={verifylogo} alt="verifylogo" />
      </div>
      <div className="center heading-container">
        <h3>Verify your account</h3>
      </div>
      <div className="center body-container">
        Kindly check your email for a link to verify your account
      </div>
      <div className="center mail-container">
        Didn't get a mail? <Link>Resend</Link>
      </div>
    </div>
  );
};

export default Verifyaccount;
