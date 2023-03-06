/** @format */

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Verifyaccount from "./pages/verifyaccount/Verifyaccount";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import Resetpassword from "./pages/resetpassword/Resetpassword";
import ApplicantDashboard from "./pages/applicant-dashboard/ApplicantDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/verify-account" element={<Verifyaccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<Resetpassword />} />
      <Route path="/applicant" element={<ApplicantDashboard />} />
    </Routes>
  );
}

export default App;
