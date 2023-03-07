import React from "react";
import {
  ActivitiesContainer,
  ApplicantHomeParent,
  CenterWrapper,
  ProfileView,
  RecentActivities,
  RequestVettingContainer,
  SummaryCard,
  SummaryContainer,
} from "./applicant.home.styles";

const ApplicantHome = () => {
  return (
    <ApplicantHomeParent>
      <CenterWrapper>
        <SummaryContainer>
          <SummaryCard background="#f2fcf9" borderColor="#22a57e">
            <h2>Completed Requests</h2>
            <h1>25</h1>
          </SummaryCard>
          <SummaryCard background="#FFF9E5" borderColor="#BFA24C">
            <h2>Pending Requests</h2>
            <h1>13</h1>
          </SummaryCard>
          <SummaryCard background="#FEF1F1" borderColor="#B21015">
            <h2>Declined Requests</h2>
            <h1>10</h1>
          </SummaryCard>
        </SummaryContainer>

        <RequestVettingContainer>Request Vetting</RequestVettingContainer>

        <ActivitiesContainer>
          <RecentActivities></RecentActivities>
          <ProfileView></ProfileView>
        </ActivitiesContainer>
      </CenterWrapper>
    </ApplicantHomeParent>
  );
};

export default ApplicantHome;
