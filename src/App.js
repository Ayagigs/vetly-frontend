/** @format */

import { Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Verifyaccount from "./pages/verifyaccount/Verifyaccount";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import Resetpassword from "./pages/resetpassword/Resetpassword";
import ApplicantDashboard from "./layouts/applicant-dashboard-layout/ApplicantDashboard";
import { ProtectedRoute } from "./custom-routes/ProtectedRoutes";
import BusinessLayout from "./layouts/business-dashboard-layout/BusinessLayout";
import AdminLayout from "./layouts/admin-dashboard-layout/AdminLayout";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/" element={<Signin />} />
      <Route path="/verify-account" element={<Verifyaccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<Resetpassword />} />
      <Route path="/business" element={<BusinessLayout />} />
      <Route path="/admin" element={<AdminLayout />} />
      <Route
        path="/applicant/*"
        element={
          <ProtectedRoute redirectPath="/">
            <ApplicantDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
