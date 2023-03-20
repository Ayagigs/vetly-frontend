import React from 'react'
import {ActivitiesContainer,
AdminHomeParent,
CenterWrapper,
SummaryContainer,
SummaryCard,
RecentActivities,
Ractivities
} from "./admin.home.styles";
import activities from "../../assets/activities.png";
import ractivities from "../../assets/ractivities.png";

const AdminHome = () => {
  return (
    <AdminHomeParent>
      <CenterWrapper>
        <SummaryContainer>
          <SummaryCard background="#FFFFFF" borderColor="#5D5E5F">
            <h2>Revenue</h2>
            <h1>170ETH</h1>
            <h3>/$120,000</h3>
          </SummaryCard>
          <SummaryCard background="#FFFFFF" borderColor="#5D5E5F">
            <h2>Registered Users</h2>
            <h1>2500</h1>
          </SummaryCard>
          <SummaryCard background="#FEF1F1" borderColor="#5D5E5F">
            <h2>Registered Companies</h2>
            <h1>250</h1>
            </SummaryCard>
            <SummaryCard background="#FEF1F1" borderColor="#5D5E5F">
              <h2>Successful Vettings</h2>
              <h1>25</h1>
            </SummaryCard>
        </SummaryContainer>


        <ActivitiesContainer>
          <RecentActivities>
         <img src={activities} alt="activities"/>
         </RecentActivities>
         <Ractivities>
        <img src={ractivities} alt="reactivities"/>
        </Ractivities>
        </ActivitiesContainer>
      </CenterWrapper>
    </AdminHomeParent>
  );
};

export default AdminHome