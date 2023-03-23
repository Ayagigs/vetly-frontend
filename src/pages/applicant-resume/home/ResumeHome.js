import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import FormButton from "../../../components/custom-button/FormButton";
import {
  ButtonsContainer,
  HeadingContainer,
  ResumeParent,
  Wrapper,
} from "./resume.home.styles";
import { APIConfig } from "../../../config/apiConfig";

const ResumeHome = () => {
  const [isOutletActive, setIsOutletActive] = useState(false);
  const navigate = useNavigate();

  const getResume = async () => {
    try {
      const { data } = await APIConfig.get("resume");
      // console.log(data === "");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResume();
  }, []);

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
