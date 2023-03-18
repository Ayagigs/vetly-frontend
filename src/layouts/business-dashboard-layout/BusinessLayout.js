import React from "react";
import { Routes } from "react-router-dom";
import { MainContentArea, ParentContainer } from "./business.dashboard.styles";
import Sidebar from "../../components/sidebar/Sidebar";
import { sideBarLinks } from "./routes";

const BusinessLayout = () => {
  return (
    <ParentContainer>
      <Sidebar routes={sideBarLinks} />

      <MainContentArea>Business Main Area</MainContentArea>

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

export default BusinessLayout;
