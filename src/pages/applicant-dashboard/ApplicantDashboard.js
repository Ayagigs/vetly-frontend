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
import Vetting from "../../components/vetting/Vetting";
import ApplicantHome from "../../components/home/ApplicantHome";

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
          </Routes>
        </div>
      </MainContentArea>
    </ParentContainer>
  );
};

export default ApplicantDashboard;
