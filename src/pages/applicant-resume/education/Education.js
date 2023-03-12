import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormButton from "../../../components/custom-button/FormButton";
import FormDateInput from "../../../components/custom-date-input/FormDateInput";
import FormTextInput from "../../../components/custom-input/FormTextInput";
import FormTextArea from "../../../components/custom-textarea/FormTextArea";
import { getResumeState, updateResume } from "../../../slices/resume";
import {
  DivideWrapper,
  Heading,
  EducationForm,
  Parent,
  Wrapper,
  Side,
} from "./education.styles";

const initialState = {
  educationExperience: "",
  organization: "",
  website: "",
  finalGrade: "",
  city: "",
  country: "",
  from: "",
  to: "",
};

const Education = () => {
  const [education, seteducation] = useState(initialState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getResumeState);

  const routeToNextPage = () => {
    navigate("/applicant/resume/build/skills");
  };

  const routeToPreviousPage = () => {
    navigate("/applicant/resume/build/work-experience");
    const newActiveHeaders = data.activeHeaders.filter((el) => el !== 2);
    const resume = {
      ...data,
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

  const {
    educationExperience,
    organization,
    website,
    finalGrade,
    city,
    country,
    from,
    to,
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
            value={organization}
            name="organization"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Website"
            placeholder="enter email address"
            value={website}
            name="website"
            handleChange={handleChange}
          />

          <DivideWrapper>
            <Side>
              {" "}
              <FormTextInput
                labelName="City"
                placeholder="enter city"
                width="100%"
                value={city}
                name="city"
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
                value={from}
                name="from"
                handleChange={handleChange}
              />
            </Side>

            <Side>
              {" "}
              <FormDateInput
                labelName="To"
                placeholder=""
                width="100%"
                value={to}
                name="to"
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
