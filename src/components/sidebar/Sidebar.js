import React from "react";
import {
  SidebarLogoContainer,
  SidebarParent,
  LogoutArea,
  SidebarLinksContainer,
  StyledNavLink,
} from "./sidebar.styles";
import vetLogo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ routes }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userToken");

    navigate("/");
  };
  
  return (
    <SidebarParent>
      <SidebarLogoContainer>
        <img src={vetLogo} alt="vetly-logo" />
        <h1>vetly</h1>
      </SidebarLogoContainer>
      <SidebarLinksContainer>
        {routes.map((link) => (
          <StyledNavLink
            to={link.path}
            style={{ textDecoration: "none" }}
            key={link.text}
          >
            <img src={link.imagePath} alt={link.alt} />
            <h3>{link.text}</h3>
          </StyledNavLink>
        ))}
      </SidebarLinksContainer>
      <LogoutArea onClick={handleLogout}>
        <h3>Logout</h3>
      </LogoutArea>
    </SidebarParent>
  );
};

export default Sidebar;
