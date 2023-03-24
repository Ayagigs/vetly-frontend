import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import FormButton from "../../../components/custom-button/FormButton";
import {
  ButtonsContainer,
  HeadingContainer,
  ResumeParent,
  Wrapper,
} from "./resume.home.styles";
import { useDispatch, useSelector } from "react-redux";
import { APIConfig } from "../../../config/apiConfig";
import { updateResume, getWorkExperienceState } from "../../../slices/resume";

const ResumeHome = () => {
  const [isOutletActive, setIsOutletActive] = useState(false);
  const [hasResume, setHasResume] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const workExperienceState = useSelector(getWorkExperienceState);
  useEffect(() => {
    const fetchResume = async () => {
      const experience = workExperienceState;
      try {
        const { data } = await APIConfig.get("resume");
        // console.log(data === "");

        if (data !== "") {
          const { work_experience } = data;
          setHasResume(true);
          dispatch(
            updateResume({
              ...data,
              personalInfo: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                contactAddress: "",
                city: "",
                country: "",
                dateOfBirth: "",
                gender: "",
              },
              workExperience:
                work_experience.length === 0
                  ? experience
                  : work_experience[work_experience.length - 1],
              education: {
                educationExperience: "",
                educationOrganization: "",
                educationWebsite: "",
                educationCity: "",
                educationCountry: "",
                educationStartDate: "",
                educationEndDate: "",
                main_activities: "",
                finalGrade: "",
              },
              activeHeaders: [0],
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchResume();
    // eslint-disable-next-line
  }, [dispatch]);

  // const createNewResume = async () => {
  //   try {
  //     const { data } = await APIConfig.post("resume");
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const routeToResumeBuildPage = async () => {
    setIsOutletActive(true);
    if (!hasResume) {
      // await createNewResume();
    }
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
