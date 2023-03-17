import React from "react";
import "./signup.css";
import logo from "../../assets/logo.png";
import frame from "../../assets/frame.png";
import { Link } from "react-router-dom";
import { FormControl, Text, FormLabel, Input, Button } from "@chakra-ui/react";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";

const Signup = () => {
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
              <Text fontWeight="400" fontSize="12">
                Enter the fields below to get started
              </Text>
            </div>

            <FormControl>
              <FormLabel fontSize="12" fontWeight="500" fontFamily="inherit">
                Full name
              </FormLabel>
              <Input
                type="Full name"
                fontSize="12"
                fontWeight="400"
                fontFamily="inherit"
                placeholder="Enter Full name"
              />
            </FormControl>

            <FormControl>
              <FormLabel fontSize="12" fontWeight="500" fontFamily="inherit">
                Email
              </FormLabel>
              <Input
                type="email"
                fontSize="12"
                fontWeight="400"
                fontFamily="inherit"
                placeholder="Enter email"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontSize="12" fontWeight="500" fontFamily="inherit">
                Password
              </FormLabel>
              <Input
                type="password"
                fontSize="12"
                fontWeight="400"
                fontFamily="inherit"
                placeholder="Create a password"
              />
            </FormControl>

            <Button
              colorScheme="blue"
              width="full"
              mt={4}
              fontSize="12"
              fontWeight="500"
              fontFamily="inherit"
            >
              Sign up
            </Button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{ flex: 1, backgroundColor: "#000000", height: "1px" }}
              />

              <p style={{ margin: "0 10px" }}>or</p>

              <div
                style={{ flex: 1, backgroundColor: "#000000", height: "1px" }}
              />
            </div>
            <Button
              colorScheme="gray"
              width="full"
              mt={4}
              fontSize="12"
              fontWeight="500"
              fontFamily="inherit"
            >
              <img src={google} alt="google" height={10} width={10} />
              Sign up with Google
            </Button>
            <Button
              colorScheme="gray"
              width="full"
              mt={4}
              fontSize="12"
              fontWeight="500"
              fontFamily="inherit"
            >
              <img
                src={facebook}
                alt="facebook"
                paddingLeft="5"
                height={10}
                width={10}
              />
              Sign up with Facebook
            </Button>
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
