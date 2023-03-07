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
  padding: 0 2rem;
  background: #ffffff;
  border-top: 1px solid #F1EEED;
  border-right: 1px solid #F1EEED;
  border-left: 1px solid #F1EEED;
  border-bottom: 5px solid #cde2fe;
  border-radius: 8px;

  & h1 {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-transform: uppercase;
  }
`;
