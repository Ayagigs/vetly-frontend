import React from "react";
import "./resetpassword.css";
import logo from "../../assets/logo.png";
import { FormControl, Text, FormLabel, Input, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Resetpassword = () => {
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
              placeholder="**********"
              height={"3.2rem"}
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
              placeholder="**********"
              height={"3.2rem"}
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
          >
            Reset your password
          </Button>
          <NavLink to="/" className="navigate">Return to login page</NavLink>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
