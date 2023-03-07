import React from "react";
import {
  ApplicantSidebarLogoContainer,
  ApplicantSidebarParent,
  LogoutArea,
  SidebarLinksContainer,
  StyledNavLink,
} from "./applicant.sidebar.styles";
import vetLogo from "../../assets/logo.png";
import vettingIcon from "../../assets/vetting-icon.png";

const ApplicantSidebar = () => {
  return (
    <ApplicantSidebarParent>
      <ApplicantSidebarLogoContainer>
        <img src={vetLogo} alt="vetly-logo" />
        <h1>vetly</h1>
      </ApplicantSidebarLogoContainer>
      <SidebarLinksContainer>
        <StyledNavLink to="/applicant/" style={{ textDecoration: "none" }}>
          <img src={vettingIcon} alt="vetting-icon" />
          <h3>Dashboard</h3>
        </StyledNavLink>

        <StyledNavLink
          to="/applicant/vetting"
          style={{ textDecoration: "none" }}
        >
          <img src={vettingIcon} alt="vetting-icon" />
          <h3>Vetting</h3>
        </StyledNavLink>

        <StyledNavLink
          to="/applicant/wallet"
          style={{ textDecoration: "none" }}
        >
          <img src={vettingIcon} alt="vetting-icon" />
          <h3>Wallet</h3>
        </StyledNavLink>

        <StyledNavLink
          to="/applicant/resume"
          style={{ textDecoration: "none" }}
        >
          <img src={vettingIcon} alt="vetting-icon" />
          <h3>Resume</h3>
        </StyledNavLink>

        <StyledNavLink
          to="/applicant/setting"
          style={{ textDecoration: "none" }}
        >
          <img src={vettingIcon} alt="vetting-icon" />
          <h3>Setting</h3>
        </StyledNavLink>
      </SidebarLinksContainer>
      <LogoutArea></LogoutArea>
    </ApplicantSidebarParent>
  );
};

export default ApplicantSidebar;
