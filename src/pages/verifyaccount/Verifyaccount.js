import React, { useState, useEffect } from "react";
import "./verifyaccount.css";
import verifylogo from "../../assets/verifylogo.png";
import FormButton from "../../components/custom-button/FormButton";
import { APIConfig } from "../../config/apiConfig";
import { Spinner, useToast, Box } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

const Verifyaccount = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");
  const { token } = useParams();

  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      toast({
        position: "top-left",
        render: () => (
          <Box color="white" p={3} bg="green.500" fontSize={15}>
            Account Verified!.
          </Box>
        ),
        onCloseComplete: () => {
          navigate("/sign-in");
        },
      });
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
  }, [success, toast, navigate, error]);

  const handleVerifyAccount = async () => {
    setLoading(true);
    try {
      const data = await APIConfig.post("auth/verify", {
        token,
      });
      setLoading(false);
      setSuccess(true);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };
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
      <div className="center body-container">
        <FormButton
          text={!loading ? "Verify" : <Spinner size="sm" color="white.500" />}
          backgroundColor="#0570fb"
          handleClick={handleVerifyAccount}
        />
      </div>
      <div className="center mail-container">
        Didn't get a mail? <Box>Resend</Box>
      </div>
    </div>
  );
};

export default Verifyaccount;
