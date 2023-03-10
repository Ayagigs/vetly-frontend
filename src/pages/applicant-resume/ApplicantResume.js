// import  { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  ApplicantResumeParent,
  Header,
  HeaderContainer,
  ResumeWrapper,
} from "./application.resume.styles";

const ApplicantResume = () => {
  // const [activeHeader, setActiveHeader] = useState(0);
  return (
    <ApplicantResumeParent>
      <ResumeWrapper>
        <HeaderContainer>
          <Header>Personal Information</Header>
          <Header>Work Experience</Header>
          <Header>Education & Training</Header>
          <Header>Personal Skill</Header>
        </HeaderContainer>

        <Outlet />
      </ResumeWrapper>
    </ApplicantResumeParent>
  );
};

export default ApplicantResume;
