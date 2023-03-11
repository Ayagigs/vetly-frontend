import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormButton from "../../../components/custom-button/FormButton";
import FormDateInput from "../../../components/custom-date-input/FormDateInput";
import FormTextInput from "../../../components/custom-input/FormTextInput";
import { getResumeState, updateResume } from "../../../slices/resume";
import {
  DivideWrapper,
  Heading,
  WorkExperienceForm,
  WorkExperienceParent,
  WorkExperienceWrapper,
  Side,
} from "./work.experience.styles";

const initialState = {
  occupation: "",
  company: "",
  email: "",
  phoneNumber: "",
  city: "",
  country: "",
  from: "",
  to: "",
};

const WorkExperience = () => {
  const [workExperience, setWorkExperience] = useState(initialState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getResumeState);

  const routeToNextPage = () => {
    navigate("/applicant/resume/build/education");
  };

  const routeToPreviousPage = () => {
    navigate("/applicant/resume/build/personal-information");
    const newActiveHeaders = data.activeHeaders.filter((el) => el !== 1);
    const resume = {
      ...data,
      activeHeaders: newActiveHeaders,
    };
    dispatch(updateResume(resume));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setWorkExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { occupation, company, email, phoneNumber, city, country, from, to } =
    workExperience;
  return (
    <WorkExperienceParent>
      <WorkExperienceWrapper>
        <Heading>Work Experience</Heading>

        <WorkExperienceForm>
          <FormTextInput
            labelName="Occupation"
            placeholder=""
            value={occupation}
            name="occupation"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Company"
            placeholder=""
            value={company}
            name="company"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Email Address"
            placeholder="enter email address"
            value={email}
            name="email"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Phone Number"
            placeholder="enter phone number"
            value={phoneNumber}
            name="phoneNumber"
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
        </WorkExperienceForm>
      </WorkExperienceWrapper>
    </WorkExperienceParent>
  );
};

export default WorkExperience;
