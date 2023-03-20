import styled from "styled-components";

export const AdminHomeParent = styled.main`
  width: 100%;
  height: 100%;
`;

export const CenterWrapper = styled.div`
  width: 93%;
  height: 90%;
  margin: 5rem auto;
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
    color: #5D5E5F;
  }

  & h1 {
    font-weight: 400;
    font-size: 4.8rem;
    line-height: 5.8rem;
    color: #5D5E5F;
  }

  & h3 {
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 1.8rem;
    color: #5D5E5F;
  }
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
  border: 1px solid #374151;
  border-radius: 12px;
`;

export const Ractivities = styled.div`
  height: 100%;
  flex: 30%;
  background: #f2fcf9;
  border: 1px solid #000000;
  border-radius: 12px;
  `;