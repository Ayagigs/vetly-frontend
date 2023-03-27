import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainContentArea, ParentContainer } from "./business.dashboard.styles";
import Sidebar from "../../components/sidebar/Sidebar";
import { sideBarLinks } from "./business.routes";
import BusinessHome from "../../pages/business-home/BusinessHome";
import BusinessVetting from "../../pages/business-vetting/BusinessVetting";
import BusinessSubscription from "../../pages/business-subscription/BusinessSubscription";
import BusinessProfile from "../../pages/business-profile/BusinessProfile";
import Navbar from "../../components/navbar/Navbar";

const BusinessLayout = () => {
  return (
    <ParentContainer>
      <Sidebar routes={sideBarLinks} />
      <MainContentArea>
        {/* Build the business dashboard header here. See the applicant dashboard for inspiration */}
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
            <Route index element={<BusinessHome />} />
            <Route path="/" element={<BusinessHome />} />
            <Route path="/vetting" element={<BusinessVetting />} />
            <Route path="/subscription" element={<BusinessSubscription />} />
            <Route path="/profile" element={<BusinessProfile />} />
          </Routes>
        </div>
      </MainContentArea>
    </ParentContainer>
  );
};

export default BusinessLayout;
