import styled from "styled-components";

export const ApplicantVettingParent = styled.main`
  width: 100%;
  height: 100%;
`;

export const CenterWrapper = styled.div`
  width: 93%;
  height: 90%;
  margin: 5rem auto;
`;

export const VettingHeadersContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.8rem;
  padding: 0 3rem;
  background: #ffffff;
  border-top: 1px solid #f1eeed;
  border-right: 1px solid #f1eeed;
  border-left: 1px solid #f1eeed;
  border-bottom: 5px solid #cde2fe;
  border-radius: 8px;
`;

export const NoDataFeedback = styled.p`
  text-align: center;
  padding: 1rem;
  font-size: 1.4rem;
`;

export const Header = styled.h1`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 28px;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: ${(props) => {
    return props.active === 1 ? "4px solid #0570FB" : "none";
  }};
`;

export const DataHeadersContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #fbfbfb;
  padding: 0px 30px;
  height: 5.8rem;
  width: 100%;
  gap: 5rem;

  & .spinner {
    margin: 0 auto !important;
    text-align: center;
  }s
`;

export const DataHeader = styled.div`
  padding: 0px 24px;
  box-shadow: inset 0px -1px 0px #edf2f7;
  width: 15%;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.8rem;
`;

export const DataRowsContainer = styled.section`
  background: #ffffff;
  width: 100%;
  height: auto;
  border: 1px solid red;
  border: 1px solid rgba(1, 22, 50, 0.1);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & .spinner {
    margin: 0 auto !important;
    text-align: center;
  }
`;

export const Rows = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 9.3rem;
  width: 100%;
  gap: 2rem;
  box-shadow: inset 0px -1px 0px #edf2f7;
`;

export const EmployerContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex: 20%;
  height: 100%;
  align-items: center;
  padding: 1rem;

  & .employee-avatar {
    width: 4.8rem;
  }
  & .employee-name {
    color: #5d5e5f;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 18px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex: 10%;
  padding-left: 1rem;
  height: 100%;
  align-items: center;

  & .date {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 18px;
    color: #5d5e5f;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  flex: 13%;
  height: 100%;
  padding-left: 2rem;
  align-items: center;
`;

// #fff9e5

export const StatusBadge = styled.div`
  background: ${(props) =>
    props.status === "success"
      ? "#F2FCF9"
      : props.status === "failed"
      ? "#FEF1F1"
      : "#fff9e5"};
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 158px;
  height: 60px;
  color: ${(props) =>
    props.status === "success"
      ? "#22A57E"
      : props.status === "failed"
      ? "#B21015"
      : "#BFA24C"};
`;

export const EmailContainer = styled.div`
  display: flex;
  flex: 10%;
  height: 100%;
  align-items: center;
  padding-left: 4rem;

  & .email {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 18px;
    color: #5d5e5f;
  }
`;
