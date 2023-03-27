import styled from "styled-components";

export const ParentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const MainContentArea = styled.div`
  flex: 1;
  border: 1px solid #cde2fe;
  display: flex;
  flex-direction: column;
`;

export const AdminDashboardHeader = styled.header`
  width: 100%;
  height: 11%;
  border-bottom: 1px solid #cde2fe;
  display: flex;
  ji
`;

export const AdminHeaderContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

export const InfoContainer = styled.div`
  display:flex;
  width: 20%;
  height: 20%;
  margin-top: 1rem;
  margin-bottom:1.5rem;
  justify-content:flex-start;
  align-items: flex-start;
  color: #000;

  & h2 {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 36px;
    text-align:left;
  }
  `;

export const NotificationContainer = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 1rem;
  margin-bottom:1.5rem;
  
  & img {
    width: 6.3rem;
    position: absolute;
  }
`;