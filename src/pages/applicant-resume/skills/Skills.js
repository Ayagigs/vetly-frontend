import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormButton from "../../../components/custom-button/FormButton";
import FormTextArea from "../../../components/custom-textarea/FormTextArea";
import { getResumeState, updateResume } from "../../../slices/resume";
import {
  DivideWrapper,
  Heading,
  Parent,
  SkillsForm,
  Wrapper,
} from "./skills.styles";

// const initialState = {
//   personalSkills: "",
// };

const Skills = () => {
  const [personalSkills, setPersonalSkills] = useState("");

  const handleChange = (e) => {
    setPersonalSkills(e.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let data = useSelector(getResumeState);

  const routeToPreviousPage = () => {
    const newActiveHeaders = data.activeHeaders.filter((el) => el !== 3);
    const resume = {
      ...data,
      personal_skill: [personalSkills],
      activeHeaders: newActiveHeaders,
    };
    dispatch(updateResume(resume));
    navigate("/applicant/resume/build/education");
  };

  const handleSaveResume = () => {
    const resume = {
      ...data,
      work_experience: data.work_experience.concat(data.workExperience),
      education_training: data.education_training.concat(data.education),
      personal_skill: [personalSkills],
    };
    dispatch(updateResume(resume));

    console.log(data);
    navigate("/applicant/resume/build/preview");
  };

  return (
    <Parent>
      <Wrapper>
        {" "}
        <Heading>Personal Skills</Heading>
        <SkillsForm>
          <FormTextArea
            labelName="Enter your personal skills"
            name="personalSkills"
            value={personalSkills}
            handleChange={handleChange}
          />

          <DivideWrapper>
            <FormButton
              text="Previous"
              color="#0570fb"
              handleClick={routeToPreviousPage}
            />
            <FormButton
              text="Save"
              backgroundColor="#0570fb"
              handleClick={handleSaveResume}
            />
          </DivideWrapper>
        </SkillsForm>
      </Wrapper>
    </Parent>
  );
};

export default Skills;
