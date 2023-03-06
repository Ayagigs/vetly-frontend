import styled from "styled-components";

export const ParentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const MainContentArea = styled.div`
  flex: 1;
  border: 1px solid #cde2fe;
`;

export const ApplicantDashboardHeader = styled.header`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #cde2fe;
`;

export const ApplicantHeaderContainer = styled.div`
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

  & p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 24px;
  }
`;

export const SearchBarContainer = styled.section`
  flex: 1;
  height: 65%;
  margin-top: 1.1rem;
`;

export const SearchBarForm = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  height: 95%;
  padding: 0 9px;
  background: #fff;

  & .search-input {
    border: 0;
    outline: none;
    flex: 1;
    background: #fff;
    color: #726e6e;
    font-size: 1.5rem;
  }

  & .search-input::placeholder {
    color: #5d5e5f;
    line-height: 28px;
    font-size: 1.3rem;
  }

  & button {
    background: transparent;
    border: 0;
    outline: none;
  }

  & button img {
    width: 13px;
    height: 13px;
    margin: 0 10px;
  }
`;

export const AvatarContainer = styled.div`
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
