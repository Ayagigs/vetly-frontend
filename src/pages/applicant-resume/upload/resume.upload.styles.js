import styled from "styled-components";

export const ResumeUploadParent = styled.main`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.section`
  margin: 10rem auto;
  width: 55%;
  height: 70%;
  display: flex;
  flex-direction: column;

  & p {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #5d5e5f;
  }
`;

export const Heading = styled.h1`
  color: #0d0d0d;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3.6rem;
`;

export const UploadArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  border-width: 2px;
  border: 2px dotted #cccccc;
  margin-top: 1rem;
`;

export const Label = styled.label`
  width: 100%;
  height: 100%;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & p {
    font-weight: 500;
    font-size: 2rem;
    line-height: 3.4rem;
    display: flex;
    align-items: center;
    color: #0d0d0d;
  }
`;
