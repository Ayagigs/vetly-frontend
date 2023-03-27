import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { getResumeState, updateResume } from "../../../slices/resume";
import {
  ActionsBox,
  ContactBox,
  Container,
  Details,
  DivideWrapper,
  Header,
  Parent,
  Segment,
  Wrapper,
} from "./resume.preview.styles";
import { APIConfig } from "../../../config/apiConfig";
import mailIcon from "../../../assets/mail.png";
import FormButton from "../../../components/custom-button/FormButton";
import { useNavigate } from "react-router-dom";
import { useToast, Box } from "@chakra-ui/react";

const ResumePreview = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  let data = useSelector(getResumeState);
  let { work_experience, education_training, personal_skill } = data;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toast = useToast();

  useEffect(() => {
    if (success) {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="green.500" fontSize={15}>
            Resume Saved Successfully!
          </Box>
        ),

        onCloseComplete: () => {
          setSuccess(false);
        },
      });
    }
  }, [success, toast]);

  const routeToPreviousPage = () => {
    navigate("/applicant/resume/build/skills");
  };

  const handleWorkExpEdit = (id) => {
    const experienceToBeEdited = work_experience.find((el) => el.uuid === id);
    const resume = {
      ...data,
      workExperience: experienceToBeEdited,
    };

    navigate("/applicant/resume/build/work-experience");
    dispatch(updateResume(resume));
  };

  const handleEducationEdit = (id) => {
    const educationToBeEdited = education_training.find((el) => el.uuid === id);
    const resume = {
      ...data,
      education: educationToBeEdited,
    };

    navigate("/applicant/resume/build/education");
    dispatch(updateResume(resume));
  };

  const handleWorkExpRemoval = (id) => {
    const newData = work_experience.filter((el) => el.uuid !== id);
    const resume = {
      ...data,
      work_experience: newData,
    };
    dispatch(updateResume(resume));
  };

  const handleEducationRemoval = (id) => {
    const newData = education_training.filter((el) => el.uuid !== id);
    const resume = {
      ...data,
      education_training: newData,
    };
    dispatch(updateResume(resume));
  };

  const handleResumeSave = async () => {
    setLoading(true);
    const payload = {
      work_experience: data.work_experience,
      education_training: data.education_training,
      resumeId: data.id,
      saved: true,
    };

    console.log(payload);
    try {
      const { data } = await APIConfig.patch(
        `resume/${payload.resumeId}`,
        payload
      );

      if (data) {
        setLoading(false);
        setSuccess(true);
      }
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      console.log(error);
    }
  };

  return (
    <Parent>
      <Container>
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
        <Wrapper>
          <Segment>
            <h1>Work Experience</h1>
            {work_experience.length > 0 ? (
              <>
                {work_experience.map((exp) => (
                  <Details key={exp.uuid}>
                    <Header>
                      <h2>{exp.occupation}</h2>

                      <ActionsBox>
                        <p onClick={() => handleWorkExpEdit(exp.uuid)}>Edit</p>
                        <p onClick={() => handleWorkExpRemoval(exp.uuid)}>
                          Delete
                        </p>
                      </ActionsBox>
                    </Header>
                    <h2>{exp.company}</h2>
                    <p>
                      03/23 | {exp.city}, {exp.country}
                    </p>
                    <p>{exp.main_activities}</p>

                    <ContactBox>
                      <img src={mailIcon} alt="mail-icon" />
                      <p className="work-email">{exp.email_address}</p>
                    </ContactBox>
                  </Details>
                ))}
              </>
            ) : (
              <>
                <p>No experience to display</p>
              </>
            )}
          </Segment>

          <Segment>
            <h1>Education and training</h1>
            {education_training.map((education) => (
              <Details key={education.uuid}>
                <Header>
                  <h2>{education.experience}</h2>

                  <ActionsBox>
                    <p onClick={() => handleEducationEdit(education.uuid)}>
                      Edit
                    </p>
                    <p onClick={() => handleEducationRemoval(education.uuid)}>
                      Delete
                    </p>
                  </ActionsBox>
                </Header>
                <h2>{education.organization}</h2>
                <p>
                  03/23 | {education.city}, {education.country}
                </p>
                <p>{education.main_activities}</p>

                <ContactBox>
                  <img src={mailIcon} alt="mail-icon" />
                  <p className="work-email">{education.website}</p>
                </ContactBox>
              </Details>
            ))}
          </Segment>
          <Segment>
            <h1>Personal skill</h1>
            <Details>
              <p>{personal_skill[0]}</p>
            </Details>
          </Segment>
        </Wrapper>
      </Container>
      <DivideWrapper>
        <FormButton
          text="Previous"
          color="#0570fb"
          handleClick={routeToPreviousPage}
        />
        <FormButton
          text="Save"
          backgroundColor="#0570fb"
          handleClick={handleResumeSave}
          disabled={loading}
        />
      </DivideWrapper>
    </Parent>
  );
};

export default ResumePreview;
