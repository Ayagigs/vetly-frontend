import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import AdminHome from "../../pages/admin-home/AdminHome";
import RegisteredCompanies from "../../pages/registered-companies/RegisteredCompanies";
import RegisteredUsers from "../../pages/registered-users/RegisteredUsers";
import TeamMembers from "../../pages/team-members/TeamMembers";
import {
  AdminDashboardHeader,
  AdminHeaderContainer,
  InfoContainer,
  MainContentArea,
  NotificationContainer,
  ParentContainer
} from "./admin.dashboard.styles";
import notification from "../../assets/notification.png";
import { getUserName } from "../../utils";
import { sideBarLinks } from "./admin.routes";

const AdminLayout = () => {
  return (
    <ParentContainer>
      <Sidebar routes={sideBarLinks} />

      <MainContentArea>
        <AdminDashboardHeader>
          <AdminHeaderContainer>
            <InfoContainer>
              <h2>Welcome, {getUserName()}</h2>
            </InfoContainer>
            <NotificationContainer>
              <img src={notification} alt="notification" />
            </NotificationContainer>
          </AdminHeaderContainer>
        </AdminDashboardHeader>

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
