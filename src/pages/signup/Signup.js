import React from "react";
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
} from "@chakra-ui/react";
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
              />
            </FormControl>

            <FormControl marginBottom={"7px"}>
              <FormLabel fontSize="12" fontWeight="500" fontFamily="inherit">
                User Type
              </FormLabel>
              <Select placeholder="Select option" height={"3.2rem"}>
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
              >
                Sign up
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
                <img
                  src={facebook}
                  alt="facebook"
                  height={10}
                  width={10}
                />
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
