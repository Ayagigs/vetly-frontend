import React from "react";
import { useState, useEffect } from "react";
import { APIConfig } from "../../config/apiConfig";
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
  const [countData, setCountData] = useState({});

  const fetchVettingCount = async (userToken) => {
    const { data } = await APIConfig.get(`vetting/count`, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    });
    setCountData(data);
  };

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    fetchVettingCount(userToken);
  }, []);

  return (
    <ApplicantHomeParent>
      <CenterWrapper>
        <SummaryContainer>
          <SummaryCard background="#f2fcf9" borderColor="#22a57e">
            <h2>Completed Requests</h2>
            <h1>{!countData.successful ? 0 : countData.successful}</h1>
          </SummaryCard>
          <SummaryCard background="#FFF9E5" borderColor="#BFA24C">
            <h2>Pending Requests</h2>
            <h1>{!countData.pending ? 0 : countData.pending}</h1>
          </SummaryCard>
          <SummaryCard background="#FEF1F1" borderColor="#B21015">
            <h2>Declined Requests</h2>
            <h1>{!countData.failed ? 0 : countData.failed}</h1>
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
