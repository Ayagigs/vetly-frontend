import styled from "styled-components";

export const ApplicantSidebarParent = styled.aside`
  width: 18%;
  height: 100%;
  background: #ffffff;
  border-right: 1px solid #cde2fe;
`;

export const ApplicantSidebarLogoContainer = styled.div`
  width: 100%;
  height: 13%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cde2fe;
  color: #011632;

  & h1 {
    font-weight: 600;
    font-size: 3.2rem;
  }
`;
