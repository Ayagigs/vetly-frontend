import React, { useEffect, useState } from "react";
import "./resetpassword.css";
import logo from "../../assets/logo.png";
import {
  FormControl,
  Text,
  FormLabel,
  Input,
  Button,
  useToast,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { APIConfig } from "../../config/apiConfig";

const Resetpassword = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
            Password Reset Successfull!.
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

  useEffect(() => {
    setError("");
  }, [password, confirmPassword]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const { data } = await APIConfig.post("auth/change-password", {
        password,
        token,
      });

      if (data) {
        setLoading(false);
        setSuccess(true);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="reset-parent">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h3>Vetly</h3>
      </div>
      <div className="form-container">
        <form>
          <div className="form-header">Reset your password</div>
          <Text
            fontWeight="400"
            fontSize="15"
            textAlign="center"
            marginBottom="25"
            color={"#5D5E5F"}
          >
            Enter your new password
          </Text>

          <FormControl marginBottom={"1rem"}>
            <FormLabel
              fontSize="12"
              fontWeight="500"
              fontFamily="inherit"
              paddingBlock="2px"
            >
              New password
            </FormLabel>
            <Input
              type="password"
              fontSize="12"
              fontWeight="400"
              fontFamily="inherit"
              height={"3.2rem"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl marginBottom={"1rem"}>
            <FormLabel fontSize="12" fontWeight="500" fontFamily="inherit">
              Confirm new password
            </FormLabel>
            <Input
              type="password"
              fontSize="12"
              fontWeight="400"
              fontFamily="inherit"
              height={"3.2rem"}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>

          <Button
            colorScheme={"blue"}
            color={"#fff"}
            width="full"
            mt={4}
            fontSize="12"
            fontWeight="500"
            fontFamily="inherit"
            backgroundColor={"#0570FB"}
            height={"3.2rem"}
            onClick={handleResetPassword}
          >
            {!loading ? (
              "Reset your password"
            ) : (
              <Spinner size="sm" color="white.500" />
            )}
          </Button>
          <NavLink to="/" className="navigate">
            Return to login page
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
