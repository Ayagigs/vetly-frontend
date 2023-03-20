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
  height: 10%;
  border-bottom: 1px solid #cde2fe;
`;

export const AdminHeaderContainer = styled.div`
  width: 92%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  width: 20%;
  height: 65%;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: center;
  color: #000;

  & h2 {
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 36px;
  }
  `;

  export const NotificationContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & img {
    width: 5.3rem;
    height: auto;
  }
`;
