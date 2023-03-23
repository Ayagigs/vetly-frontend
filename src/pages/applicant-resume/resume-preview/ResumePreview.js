import React from "react";
import { useSelector } from "react-redux";
import { getResumeState, updateResume } from "../../../slices/resume";
import {
  ActionsBox,
  Box,
  ContactBox,
  Container,
  Details,
  Parent,
  Segment,
  Wrapper,
} from "./resume.preview.styles";
import mailIcon from "../../../assets/mail.png";

const ResumePreview = () => {
  let data = useSelector(getResumeState);
  const { work_experience, education_training } = data;
  console.log(work_experience);
  console.log(education_training);
  return (
    <Parent>
      <Container>
        <Wrapper>
          <Segment>
            <h1>Work Experience</h1>
            {work_experience.length > 0 ? (
              <>
                {work_experience.map((exp) => (
                  <Details key={exp.occupation}>
                    <Box>
                      <h2>{exp.occupation}</h2>

                      <ActionsBox>
                        <p>Edit</p>
                        <p>Delete</p>
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
                <p>No experience inputted</p>
              </>
            )}
          </Segment>

          <Segment>
            <h1>Education and training</h1>
            {education_training.map((education) => (
              <Details key={education.educationOrganization}>
                <Box>
                  <h2>{education.educationExperience}</h2>

                  <ActionsBox>
                    <p>Edit</p>
                    <p>Delete</p>
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
          </Segment>
        </Wrapper>
      </Container>
    </Parent>
  );
};

export default ResumePreview;
