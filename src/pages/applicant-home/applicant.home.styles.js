import styled from "styled-components";

export const ApplicantHomeParent = styled.main`
  width: 100%;
  height: 100%;
`;

export const CenterWrapper = styled.div`
  width: 93%;
  height: 90%;
  margin: 5rem auto;
  // position: relative;
`;

export const SummaryContainer = styled.section`
  width: 100%;
  height: 22%;
  display: flex;
  gap: 1.5rem;
  justify-content: space-around;
  align-items: center;
`;

export const SummaryCard = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3.2rem 3.2rem;
  background: ${(props) => (props.background ? props.background : "")};
  border: 1px solid ${(props) => (props.borderColor ? props.borderColor : "")};
  border-radius: 12px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);

  & h2 {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: #03387e;
  }

  & h1 {
    font-weight: 400;
    font-size: 4.8rem;
    line-height: 5.8rem;
    color: #03387e;
  }
`;

export const RequestVettingContainer = styled.div`
  width: 25%;
  margin: 4rem auto;
  height: 7.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #2f88fc;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 3.6rem;
`;

export const ActivitiesContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5rem;
  height: 80%;
`;

export const RecentActivities = styled.div`
  height: 100%;
  flex: 40%;
  background: #edf5ff;
  border: 1px solid #0570fb;
  border-radius: 12px;
`;

export const ProfileView = styled.div`
  height: 100%;
  flex: 30%;
  background: #f2fcf9;
  border: 1px solid #22a57e;
  border-radius: 12px;
`;

export const DarkOverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(29, 29, 29, 0.6);
  z-index: 9;
  cursor: pointer;
`;
