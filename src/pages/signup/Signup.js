import React, { useEffect, useState } from "react";
import "./signup.css";
import logo from "../../assets/logo.png";
import frame from "../../assets/frame.png";
import { Link } from "react-router-dom";
import {
  FormControl,
  Text,
  FormLabel,
  Input,
  Button,
  Select,
  Spinner,
  useToast,
  Box,
} from "@chakra-ui/react";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import { APIConfig } from "../../config/apiConfig";

const Signup = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    user_type: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const toast = useToast();

  useEffect(() => {
    if (success) {
      toast({
        position: "top-left",
        render: () => (
          <Box color="white" p={3} bg="green.500" fontSize={15}>
            Sign up successful. Please check your mail.
          </Box>
        ),
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
  }, [success, toast, error]);

  const { fullname, email, password, user_type } = form;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await APIConfig.post("auth/register", form);
      console.log(data);
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="signup-parent">
      <div className="signup-wrapper">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <h3>Vetly</h3>
        </div>
        <div className="frm-container">
          <form>
            <div className="form-header">
              Create your account
              <Text fontWeight="400" fontSize="12" lineHeight={"16px"}>
                Enter the fields below to get started
              </Text>
            </div>

            <FormControl marginBottom={"7px"}>
              <FormLabel
                fontSize="12"
                fontWeight="500"
                fontFamily="inherit"
                paddingBlock="2px"
              >
                Full name
              </FormLabel>
              <Input
                type="Full name"
                fontSize="12"
                fontWeight="400"
                fontFamily="inherit"
                height={"3.2rem"}
                placeholder="Enter Full name"
                name="fullname"
                value={fullname}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl marginBottom={"7px"}>
              <FormLabel fontSize="12" fontWeight="500" fontFamily="inherit">
                Email
              </FormLabel>
              <Input
                type="email"
                fontSize="12"
                fontWeight="400"
                fontFamily="inherit"
                height={"3.2rem"}
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt={4} marginBottom={"7px"}>
              <FormLabel fontSize="12" fontWeight="500" fontFamily="inherit">
                Password
              </FormLabel>
              <Input
                type="password"
                fontSize="12"
                fontWeight="400"
                fontFamily="inherit"
                height={"3.2rem"}
                placeholder="Create a password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl marginBottom={"7px"}>
              <FormLabel fontSize="12" fontWeight="500" fontFamily="inherit">
                User Type
              </FormLabel>
              <Select
                placeholder="Select option"
                height={"3.2rem"}
                onChange={handleChange}
                name="user_type"
                value={user_type}
              >
                <option value="applicant">Applicant</option>
                <option value="admin">Admin</option>
                <option value="business">Business</option>
              </Select>
            </FormControl>

            <FormControl marginBottom={"7px"}>
              {" "}
              <Button
                colorScheme={"blue"}
                color={"#fff"}
                width="full"
                mt={4}
                fontSize="12"
                fontWeight="500"
                fontFamily="inherit"
                backgroundColor={"#0570FB"}
                height={"4rem"}
                marginBottom={"5px"}
                onClick={handleSubmit}
              >
                {!loading ? "Sign up" : <Spinner size="sm" color="white.500" />}
              </Button>
            </FormControl>

            {/* <FormButton text="Sign Up" backgroundColor="#0570fb" /> */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{ flex: 1, backgroundColor: "#000000", height: "1px" }}
              />

              <p style={{ margin: "0 10px" }}>or</p>

              <div
                style={{ flex: 1, backgroundColor: "#000000", height: "1px" }}
              />
            </div>

            <FormControl marginBottom={"7px"}>
              <Button
                colorScheme="white"
                width="full"
                mt={4}
                fontSize="12"
                fontWeight="500"
                fontFamily="inherit"
                height={"4rem"}
                color={"#000"}
                border={"1px solid #000"}
              >
                <img src={google} alt="google" height={10} width={10} />
                Sign up with Google
              </Button>
            </FormControl>

            <FormControl marginBottom={"7px"}>
              <Button
                colorScheme="white"
                width="full"
                mt={4}
                fontSize="12"
                fontWeight="500"
                fontFamily="inherit"
                height={"4rem"}
                color={"#000"}
                border={"1px solid #000"}
              >
                <img src={facebook} alt="facebook" height={10} width={10} />
                Sign up with Facebook
              </Button>
            </FormControl>

            <Text
              textAlign="center"
              fontSize="12"
              fontWeight="500"
              fontFamily="inherit"
              marginTop={2}
            >
              Already have an account?
              <Link to="/">Sign in</Link>
            </Text>
          </form>
        </div>
      </div>
      <div className="signup-image">
        <img src={frame} alt="frame" className="signup-frame" />
      </div>
    </div>
  );
};

export default Signup;
