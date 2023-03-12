// import React, { useState } from "react";
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
  // const [personalSkills, setPersonalSkills] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getResumeState);

  const routeToPreviousPage = () => {
    navigate("/applicant/resume/build/education");
    const newActiveHeaders = data.activeHeaders.filter((el) => el !== 3);
    const resume = {
      ...data,
      activeHeaders: newActiveHeaders,
    };
    dispatch(updateResume(resume));
  };

  return (
    <Parent>
      <Wrapper>
        {" "}
        <Heading>Personal Skills</Heading>
        <SkillsForm>
          <FormTextArea labelName="Enter your personal skills" />

          <DivideWrapper>
            <FormButton
              text="Previous"
              color="#0570fb"
              handleClick={routeToPreviousPage}
            />
            <FormButton text="Save" backgroundColor="#0570fb" />
          </DivideWrapper>
        </SkillsForm>
      </Wrapper>
    </Parent>
  );
};

export default Skills;
