// import  { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getResumeState } from "../../slices/resume";
import {
  ApplicantResumeParent,
  Header,
  HeaderContainer,
  ResumeWrapper,
} from "./application.resume.styles";

const ApplicantResume = () => {
  // const [activeHeader, setActiveHeader] = useState(0);
  const { activeHeaders } = useSelector(getResumeState);
  return (
    <ApplicantResumeParent>
      <ResumeWrapper>
        <HeaderContainer>
          <Header active={+(0 === activeHeaders[0])}>
            Personal Information
          </Header>
          <Header active={+(1 === activeHeaders[1])}>Work Experience</Header>
          <Header>Education & Training</Header>
          <Header>Personal Skill</Header>
        </HeaderContainer>

        <Outlet />
      </ResumeWrapper>
    </ApplicantResumeParent>
  );
};

export default ApplicantResume;
