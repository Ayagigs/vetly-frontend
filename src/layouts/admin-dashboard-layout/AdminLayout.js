import React from "react";
import { Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { MainContentArea, ParentContainer } from "./admin.dashboard.styles";
import { sideBarLinks } from "./admin.routes";

const AdminLayout = () => {
  return (
    <ParentContainer>
      <Sidebar routes={sideBarLinks} />

      <MainContentArea>Admin Main Area</MainContentArea>

      <div
        className=""
        style={{
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <Routes></Routes>
      </div>
    </ParentContainer>
  );
};

export default AdminLayout;
