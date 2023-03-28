/** @format */
import Social from "./social";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Spinner, useToast } from "@chakra-ui/react";

import { APIConfig } from "../config/apiConfig";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    user_type: "applicant",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (success) {
      toast({
        position: "top-left",
        render: () => (
          <Box color="white" p={3} bg="green.500" fontSize={15}>
            Sign in successful!
          </Box>
        ),
        onCloseComplete: () => {
          const user = JSON.parse(localStorage.getItem("currentUser"));
          if (user?.userType === "admin") {
            return navigate("/admin/");
          }
          navigate("/applicant/");
        },
      });
    }
  }, [success, navigate, toast]);

  const { email, password } = form;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await APIConfig.post("auth/login", form);
      setLoading(false);
      setSuccess(true);
      localStorage.setItem("currentUser", JSON.stringify(data?.user));
      localStorage.setItem("userToken", data?.token);

      //   navigate("/applicant/");
    } catch (error) {
      setLoading(false);
      console.log(error.message);
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
    <form action="" className="signin-form" onSubmit={handleSubmit}>
      <div className="formtop">
        <div className="header">
          <h1>Sign in</h1>
          <p>Welcome back! Please enter your details.</p>
        </div>
        {/* Email input element*/}
        <label className="form-label">
          <h2>Email</h2>
        </label>
        <input
          className="form-label"
          onChange={handleChange}
          id="email"
          name="email"
          value={email}
          type="email"
          placeholder="Enter email"
          required
        />
        {/* password=input element */}
        <label className="form-label">
          <h2>Password</h2>
        </label>
        <input
          className="form-label"
          onChange={handleChange}
          id="password"
          name="password"
          value={password}
          type="password"
          placeholder="Enter password"
        />
        <button>
          {!loading ? "Sign in" : <Spinner size="sm" color="white.500" />}
        </button>
      </div>
      <div className="formbottom">
        <Social />
      </div>
    </form>
  );
};
export default Form;
