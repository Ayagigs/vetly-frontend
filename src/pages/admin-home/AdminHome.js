import React from 'react'
import {
  ActivitiesContainer,
  AdminHomeParent,
  CenterWrapper,
  Ractivities,
  RecentActivities,
  SummaryCard,
  SummaryContainer,
  ListContainer,

} from "./admin.home.styles";
import moneys from "../../assets/moneys.png";
import people from "../../assets/people.png";
import building from "../../assets/building.png";
import medal from "../../assets/medal.png";
import {
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import {InfoOutlineIcon} from '@chakra-ui/icons';


const AdminHome = () => {
  return (
    <AdminHomeParent>
      <CenterWrapper>
        <h1>Dashboard</h1>
        <SummaryContainer>
          <SummaryCard background="#FFFFFF" borderColor="#000000">
            <img src={moneys} alt="moneys" width="15px" height="15px" />
            <h1>170 ETH </h1>
            <h2>Revenue</h2>
          </SummaryCard>
          <SummaryCard background="#FFFFFF" borderColor="#000000">
            <img src={people} alt="people" width="15px" height="15px" />
            <h1>2,500</h1>
            <h2>Registered Users</h2>
          </SummaryCard>
          <SummaryCard background="#FFFFFF" borderColor="#000000">
            <img src={building} alt="building" width="15px" height="15px" />
            <h1>250</h1>
            <h2>Registered Companies</h2>
          </SummaryCard>
          <SummaryCard background="#FFFFFF" borderColor="#000000">
            <img src={medal} alt="medal" width="15px" height="15px" />
            <h1>25</h1>
            <h2>Successful Vettings</h2>
          </SummaryCard>
        </SummaryContainer>
        <ActivitiesContainer>
          <RecentActivities><h1>Recent Activities</h1></RecentActivities>
          <Ractivities>
            <ListContainer>
              <List spacing={5}>
                <h1> Recent Activities</h1>

                <ListItem>
                <ListIcon as={InfoOutlineIcon}  color='grey.500'/>
                  Teemah make changes to Subscribed Users
                  <p>2 days ago</p>
                </ListItem>

                <ListItem>
                  <ListIcon as={InfoOutlineIcon}  color='grey.500'/>
                  Teemah make changes to Subscribed Users
                  <p> 2 days ago </p>
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoOutlineIcon} color='grey.500'/>
                  Teemah make changes to Subscribed users
                  <p> 2 days ago </p>
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoOutlineIcon} color='grey.500'/>
                  Teemah make changes to Subscribed Users
                  <p> 2 days ago </p>
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoOutlineIcon} color='grey.500'/>
                  Teemah make changes to Subscribed Users
                  <p> 2 days ago </p>
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoOutlineIcon} color='grey.500'/>
                  Teemah make changes to Subscribed Users
                  <p> 2 days ago </p>
                </ListItem>
              </List>
            </ListContainer>
          </Ractivities>

        </ActivitiesContainer>
      </CenterWrapper>
    </AdminHomeParent>
  );
};

export default AdminHome