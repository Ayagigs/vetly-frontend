import React from "react";
import "./resetpassword.css";
import logo from "../../assets/logo.png";
import {
    FormControl,
    Text,
    FormLabel,
    Input,
    Button,
    Link
} from "@chakra-ui/react";

const Resetpassword = () => {
    return (
        <div className="reset-parent">
            <div className="logo-container">
                <img src={logo} alt="logo" />
                <h3>Vetly</h3>
            </div>
            <div className="form-container">
                <form>
                    <div className="form-header">
                        Reset your password


                    </div>
                    <Text
                        fontWeight="400"
                        fontSize="20"
                        textAlign="center"
                        marginBottom="25"
                    >

                        Enter your new password
                    </Text>

                    <FormControl>
                        <FormLabel
                            fontSize="12"
                            fontWeight="500"
                            fontFamily="inherit"
                            paddingBlock="2px">
                            New password
                        </FormLabel>
                        <Input
                            type="password"
                            fontSize="12"
                            fontWeight="400"
                            fontFamily="inherit"
                            placeholder="**********"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel
                            fontSize="12"
                            fontWeight="500"
                            fontFamily="inherit"
                        >
                            Confirm new password
                        </FormLabel>
                        <Input
                            type="password"
                            fontSize="12"
                            fontWeight="400"
                            fontFamily="inherit"
                            placeholder="**********"
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
                        Reset your password
                    </Button>
                    <Link
                        fontFamily="inherit"
                        paddingTop="10"
                    >
                        Return to login page</Link>
                </form>
            </div>
        </div>


    );
};

export default Resetpassword;