import React from "react";
import {
  ApplicantSidebarLogoContainer,
  ApplicantSidebarParent,
} from "./applicant.sidebar.styles";
import vetLogo from "../../assets/logo.png";

const ApplicantSidebar = () => {
  return (
    <ApplicantSidebarParent>
      <ApplicantSidebarLogoContainer>
        <img src={vetLogo} alt="vetly-logo" />
        <h1>vetly</h1>
      </ApplicantSidebarLogoContainer>
    </ApplicantSidebarParent>
  );
};

export default ApplicantSidebar;
