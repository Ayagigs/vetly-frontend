import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import FormButton from "../../../components/custom-button/FormButton";
import {
  ButtonsContainer,
  HeadingContainer,
  ResumeParent,
  Wrapper,
} from "./resume.home.styles";

const ResumeHome = () => {
  const [isOutletActive, setIsOutletActive] = useState(false);
  const navigate = useNavigate();

  const routeToResumeBuildPage = () => {
    setIsOutletActive(true);
    navigate("/applicant/resume/build");
  };

  const routeToResumeUploadPage = () => {
    setIsOutletActive(true);
    navigate("/applicant/resume/upload");
  };
  return (
    <>
      {!isOutletActive ? (
        <ResumeParent>
          {/* <br />
          <button onClick={routeToResumeBuildPage}>click</button>
          <br /> */}
          <Wrapper>
            <HeadingContainer>
              <h1>
                Upload your resume document <br /> or create one for Vetly
              </h1>
            </HeadingContainer>

            <ButtonsContainer>
              <FormButton
                text="Upload Resume"
                color="#0570fb"
                handleClick={routeToResumeUploadPage}
              />
              <FormButton
                text="Build Resume"
                backgroundColor="#0570fb"
                handleClick={routeToResumeBuildPage}
              />
            </ButtonsContainer>
          </Wrapper>
        </ResumeParent>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default ResumeHome;
