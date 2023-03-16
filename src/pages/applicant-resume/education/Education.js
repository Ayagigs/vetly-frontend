import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormButton from "../../../components/custom-button/FormButton";
import FormDateInput from "../../../components/custom-date-input/FormDateInput";
import FormTextInput from "../../../components/custom-input/FormTextInput";
import FormTextArea from "../../../components/custom-textarea/FormTextArea";
import {
  getEducationState,
  getResumeState,
  updateResume,
} from "../../../slices/resume";
import {
  DivideWrapper,
  Heading,
  EducationForm,
  Parent,
  Wrapper,
  Side,
} from "./education.styles";

const Education = () => {
  const [education, seteducation] = useState(useSelector(getEducationState));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getResumeState);

  const routeToNextPage = () => {
    navigate("/applicant/resume/build/skills");
    const newActiveHeaders = [...data?.activeHeaders, 3];
    const resume = {
      ...data,
      ...education,
      activeHeaders: newActiveHeaders,
    };
    dispatch(updateResume(resume));
  };

  const routeToPreviousPage = () => {
    navigate("/applicant/resume/build/work-experience");
    const newActiveHeaders = data.activeHeaders.filter((el) => el !== 2);
    const resume = {
      ...data,
      education,
      activeHeaders: newActiveHeaders,
    };
    dispatch(updateResume(resume));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    seteducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearInputs = () => {
    seteducation((prev) => ({
      ...prev,
      educationExperience: "",
      educationOrganization: "",
      educationWebsite: "",
      finalGrade: "",
      educationCity: "",
      country: "",
      educationStartDate: "",
      educationEndDate: "",
    }));
  };

  const handleAddNewEducation = () => {
    clearInputs();
    
    let { listOfEducationExperiences, ...rest } = data;

    listOfEducationExperiences = listOfEducationExperiences.concat({
      id: listOfEducationExperiences.length + 1,
      ...education,
    });

    const resume = {
      ...rest,
      listOfEducationExperiences,
    };
    dispatch(updateResume(resume));
  };

  const {
    educationExperience,
    educationOrganization,
    educationWebsite,
    finalGrade,
    educationCity,
    country,
    educationStartDate,
    educationEndDate,
  } = education;
  return (
    <Parent>
      <Wrapper>
        <Heading>Education and Training</Heading>

        <EducationForm>
          <FormTextInput
            labelName="Education and training experience"
            placeholder=""
            value={educationExperience}
            name="educationExperience"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Organization providing education and training"
            placeholder=""
            value={educationOrganization}
            name="educationOrganization"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Website"
            placeholder="enter email address"
            value={educationWebsite}
            name="educationWebsite"
            handleChange={handleChange}
          />

          <DivideWrapper>
            <Side>
              {" "}
              <FormTextInput
                labelName="City"
                placeholder="enter city"
                width="100%"
                value={educationCity}
                name="educationCity"
                handleChange={handleChange}
              />
            </Side>

            <Side>
              {" "}
              <FormTextInput
                labelName="Country"
                placeholder="enter country"
                width="100%"
                value={country}
                name="country"
                handleChange={handleChange}
              />
            </Side>
          </DivideWrapper>

          <DivideWrapper>
            <Side>
              {" "}
              <FormDateInput
                labelName="From"
                placeholder=""
                width="100%"
                value={educationStartDate}
                name="educationStartDate"
                handleChange={handleChange}
              />
            </Side>

            <Side>
              {" "}
              <FormDateInput
                labelName="To"
                placeholder=""
                width="100%"
                value={educationEndDate}
                name="educationEndDate"
                handleChange={handleChange}
              />
            </Side>
          </DivideWrapper>

          <FormTextInput
            labelName="Final grade"
            placeholder="enter email address"
            value={finalGrade}
            name="finalGrade"
            handleChange={handleChange}
          />

          <FormTextArea labelName="More activities and responsibilities" />

          <FormButton
            text="Add more experience"
            color="#0570fb"
            width={"75%"}
            handleClick={handleAddNewEducation}
          />

          <DivideWrapper>
            <FormButton
              text="Previous"
              color="#0570fb"
              handleClick={routeToPreviousPage}
            />
            <FormButton
              text="Next"
              backgroundColor="#0570fb"
              handleClick={routeToNextPage}
            />
          </DivideWrapper>
        </EducationForm>
      </Wrapper>
    </Parent>
  );
};

export default Education;
