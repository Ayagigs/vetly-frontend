import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResumeState, updateResume } from "../../../slices/resume";
import {
  ActionsBox,
  Box,
  ContactBox,
  Container,
  Details,
  DivideWrapper,
  Parent,
  Segment,
  Wrapper,
} from "./resume.preview.styles";
import mailIcon from "../../../assets/mail.png";
import FormButton from "../../../components/custom-button/FormButton";
import { useNavigate } from "react-router-dom";

const ResumePreview = () => {
  let data = useSelector(getResumeState);
  // console.log(data);
  let { work_experience, education_training, personal_skill } = data;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const routeToPreviousPage = () => {
    navigate("/applicant/resume/build/skills");
  };

  const handleWorkExpRemoval = (id) => {
    const newData = work_experience.filter((el) => el.uid !== id);
    const resume = {
      ...data,
      work_experience: newData,
    };
    dispatch(updateResume(resume));
  };

  const handleEducationRemoval = (id) => {
    const newData = education_training.filter((el) => el.uid !== id);
    const resume = {
      ...data,
      education_training: newData,
    };
    dispatch(updateResume(resume));
  };

  return (
    <Parent>
      <Container>
        <Wrapper>
          <Segment>
            <h1>Work Experience</h1>
            {work_experience.length > 0 ? (
              <>
                {work_experience.map((exp) => (
                  <Details key={exp.uid}>
                    <Box>
                      <h2>{exp.occupation}</h2>

                      <ActionsBox>
                        <p>Edit</p>
                        <p
                          onClick={() =>
                            handleWorkExpRemoval(exp.uid)
                          }
                        >
                          Delete
                        </p>
                      </ActionsBox>
                    </Box>
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
              <Details key={education.uid}>
                <Box>
                  <h2>{education.educationExperience}</h2>

                  <ActionsBox>
                    <p>Edit</p>
                    <p onClick={() => handleEducationRemoval(education.uid)}>
                      Delete
                    </p>
                  </ActionsBox>
                </Box>
                <h2>{education.educationOrganization}</h2>
                <p>
                  03/23 | {education.educationCity},{" "}
                  {education.educationCountry}
                </p>
                <p>{education.main_activities}</p>

                <ContactBox>
                  <img src={mailIcon} alt="mail-icon" />
                  <p className="work-email">{education.educationWebsite}</p>
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
        <FormButton text="Save" backgroundColor="#0570fb" />
      </DivideWrapper>
    </Parent>
  );
};

export default ResumePreview;
