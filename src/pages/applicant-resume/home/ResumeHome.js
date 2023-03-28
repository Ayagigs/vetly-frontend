import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Oval } from "react-loader-spinner";

import FormButton from "../../../components/custom-button/FormButton";
import {
  ButtonsContainer,
  HeadingContainer,
  ResumeParent,
  Wrapper,
} from "./resume.home.styles";
import { useDispatch, useSelector } from "react-redux";
import { APIConfig } from "../../../config/apiConfig";
import {
  updateResume,
  getWorkExperienceState,
  getEducationState,
} from "../../../slices/resume";

const ResumeHome = () => {
  const [isOutletActive, setIsOutletActive] = useState(false);
  const [hasResume, setHasResume] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const workExperienceState = useSelector(getWorkExperienceState);
  const educationState = useSelector(getEducationState);
  useEffect(() => {
    const fetchResume = async () => {
      let experience = workExperienceState;
      let education = educationState;
      experience = {
        uuid: uuidv4(),
        ...experience,
      };

      education = {
        uuid: uuidv4(),
        ...education,
      };
      setLoading(true);
      try {
        const { data } = await APIConfig.get("resume");
        // console.log(data === "");

        if (data !== "") {
          let { work_experience } = data;

          work_experience = work_experience.map((el) => ({
            uuid: uuidv4(),
            ...el,
          }));
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
              education,
              activeHeaders: [0],
            })
          );
        }
        setLoading(false);
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
            <Oval
              height={80}
              width={80}
              color="#0570FB"
              wrapperStyle={{}}
              wrapperClass="loader"
              visible={loading}
              ariaLabel="oval-loading"
              secondaryColor="#0570FB"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
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
