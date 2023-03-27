/** @format */

import "./verify.css";
import Vlogo from "../../components/vlogo";
import { useEffect, useState } from "react";
import { APIConfig } from "../../config/apiConfig";
import { Box, Spinner, useToast } from "@chakra-ui/react";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  useEffect(() => {
    if (success) {
      toast({
        position: "top-left",
        render: () => (
          <Box color="white" p={3} bg="green.500" fontSize={15}>
            Please check your mail for reset password link.
          </Box>
        ),
      });
      return;
    }

    if (error)
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="red.500" fontSize={15}>
            {error}
          </Box>
        ),
      });
  }, [success, toast, error]);

  const handleForgot = async (e) => {
    e.preventDefault();
    if (!email) return setError("Please, enter your email");
    setLoading(true);
    try {
      const { data } = await APIConfig.post("auth/forgot-password", {
        email,
      });

      console.log(data);
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      console.log(error);
    }
  };
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
            {/* <Input placeholder="Enter email" /> */}
            <input
              type="text"
              placeholder={props.placeholder}
              style={{ height: "36px" }}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="msgbtn">
          <button onClick={handleForgot}>
            {!loading ? "Continue" : <Spinner size="sm" color="white.500" />}
          </button>
        </div>

        <a className="lgpage" href="/">
          Return to login page
        </a>
      </div>
    </div>
  );
};
export default ForgotPassword;
