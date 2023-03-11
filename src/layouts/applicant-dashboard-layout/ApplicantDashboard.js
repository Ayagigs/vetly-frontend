import React from "react";
import ApplicantSidebar from "../../components/applicant-sidebar/ApplicantSidebar";
import {
  ApplicantDashboardHeader,
  ApplicantHeaderContainer,
  AvatarContainer,
  InfoContainer,
  MainContentArea,
  ParentContainer,
  SearchBarContainer,
  SearchBarForm,
} from "./applicant.dashboard.styles";
import searchIcon from "../../assets/search-icon.png";
import avatar from "../../assets/avatar.png";
import { Route, Routes } from "react-router-dom";
import Vetting from "../../pages/applicant-vetting/Vetting";
import ApplicantHome from "../../pages/applicant-home/ApplicantHome";
import ApplicantBuildResume from "../../pages/applicant-resume/ApplicantResume";
import PersonalInformation from "../../pages/applicant-resume/personal-information/PersonalInformation";
import WorkExperience from "../../pages/applicant-resume/work-experience/WorkExperience";
import Education from "../../pages/applicant-resume/education/Education";
import Skills from "../../pages/applicant-resume/skills/Skills";
import ResumeHome from "../../pages/applicant-resume/home/ResumeHome";

const ApplicantDashboard = () => {
  return (
    <ParentContainer>
      <ApplicantSidebar />
      <MainContentArea>
        <ApplicantDashboardHeader>
          <ApplicantHeaderContainer>
            <InfoContainer>
              <h2>Hello, Victor</h2>
              <p>Today is Monday, 06/02/2023</p>
            </InfoContainer>
            <SearchBarContainer>
              <SearchBarForm>
                <button>
                  <img src={searchIcon} alt="search-icon" />
                </button>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Type to search..."
                />
              </SearchBarForm>
            </SearchBarContainer>
            <AvatarContainer>
              <img src={avatar} alt="avatar" />
            </AvatarContainer>
          </ApplicantHeaderContainer>
        </ApplicantDashboardHeader>

        <div
          className=""
          style={{
            height: "100%",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route index element={<ApplicantHome />} />
            <Route path="/vetting" element={<Vetting />} />
            <Route path="/resume" element={<ResumeHome />}>
              <Route path="build" element={<ApplicantBuildResume />}>
                <Route index element={<PersonalInformation />} />
                <Route
                  path="personal-information"
                  element={<PersonalInformation />}
                />
                <Route path="work-experience" element={<WorkExperience />} />
                <Route path="education" element={<Education />} />
                <Route path="skills" element={<Skills />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </MainContentArea>
    </ParentContainer>
  );
};

export default ApplicantDashboard;
