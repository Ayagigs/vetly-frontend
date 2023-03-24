import styled from "styled-components";

export const ResumeParent = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .loader {
    position: absolute;
    top: 50%;
    left: 55%;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 35%;
  border: 2px solid #cccccc;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #000000;
  text-align: center;
  margin-top: 5rem;

  & h1 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 3rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 90%;
  height: 18%;
  margin: 5rem auto 0rem auto;
  display: flex;
  gap: 2rem;
`;
