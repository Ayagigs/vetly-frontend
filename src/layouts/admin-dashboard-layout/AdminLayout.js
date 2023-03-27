import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import AdminHome from "../../pages/admin-home/AdminHome";
import RegisteredCompanies from "../../pages/registered-companies/RegisteredCompanies";
import RegisteredUsers from "../../pages/registered-users/RegisteredUsers";
import TeamMembers from "../../pages/team-members/TeamMembers";
import { MainContentArea, ParentContainer } from "./admin.dashboard.styles";
import { sideBarLinks } from "./admin.routes";
import Navbar from "../../components/navbar/Navbar";

const AdminLayout = () => {
  return (
    <ParentContainer>
      <Sidebar routes={sideBarLinks} />

      <MainContentArea>
        {/* Build the admin dashboard header here. See the applicant dashboard for inspiration */}
        <Navbar profileRoute={"/business/profile"} />

        <div
          className=""
          style={{
            height: "100%",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route index element={<AdminHome />} />
            <Route path="/" element={<AdminHome />} />
            <Route path="/registered-users" element={<RegisteredUsers />} />
            <Route
              path="/registered-companies"
              element={<RegisteredCompanies />}
            />
            <Route path="/team-members" element={<TeamMembers />} />
          </Routes>
        </div>
      </MainContentArea>
    </ParentContainer>
  );
};

export default AdminLayout;
