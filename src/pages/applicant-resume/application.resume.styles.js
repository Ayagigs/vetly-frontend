import styled from "styled-components";

export const ApplicantResumeParent = styled.main`
  width: 100%;
  height: 100%;
`;

export const ResumeWrapper = styled.div`
  width: 78%;
  height: 90%;
  margin: 4rem 0rem 5rem 5rem;
`;

export const HeaderContainer = styled.section`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f1eeed;
  border-right: 1px solid #f1eeed;
  border-left: 1px solid #f1eeed;
  border-bottom: 5px solid #cde2fe;
`;

export const Header = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.5rem;
  text-transform: capitalize;
  height: 100%;
  display: flex;
  align-items: center;
  flex: 25%;
  border-bottom: ${(props) => {
    return props.active === 1 ? "4px solid #0570FB" : "none";
  }};
  cursor: pointer;
`;
