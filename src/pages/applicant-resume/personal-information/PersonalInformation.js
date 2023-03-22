import React, { useState } from "react";
import FormTextInput from "../../../components/custom-input/FormTextInput";
import {
  PersonalInformationParent,
  PersonalInfoWrapper,
  ResumeForm,
  Heading,
  DivideWrapper,
  Side,
} from "./person.information.styles";
import { useNavigate } from "react-router-dom";
import FormButton from "../../../components/custom-button/FormButton";
import { useSelector, useDispatch } from "react-redux";
import {
  getPersonaalInfo,
  getResumeState,
  updateResume,
} from "../../../slices/resume";
import FormDateInput from "../../../components/custom-date-input/FormDateInput";


const PersonalInformation = () => {
  const [personalInfo, setPersonalInfo] = useState(
    useSelector(getPersonaalInfo)
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(useSelector(getPersonaalInfo));

  const { activeHeaders, ...rest } = useSelector(getResumeState);

  const routeToNextPage = () => {
    navigate("/applicant/resume/build/work-experience");

    const newActiveHeaders = [...activeHeaders, 1];
    const resume = {
      ...rest,
      personalInfo,
      activeHeaders: newActiveHeaders,
    };
    dispatch(updateResume(resume));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    contactAddress,
    city,
    country,
    dateOfBirth,
  } = personalInfo;

  return (
    <PersonalInformationParent>
      <PersonalInfoWrapper>
        <Heading>Personal Information</Heading>

        <ResumeForm>
          <FormTextInput
            labelName="First Name"
            placeholder="Enter first name"
            value={firstName}
            name="firstName"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Last Name"
            placeholder="Enter last name"
            value={lastName}
            name="lastName"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Email Address"
            placeholder="Enter email address"
            value={email}
            name="email"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Phone Number"
            placeholder="Enter phone number"
            value={phoneNumber}
            name="phoneNumber"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Contact Address"
            placeholder="Enter contact address"
            value={contactAddress}
            name="contactAddress"
            handleChange={handleChange}
          />

          <FormDateInput
            labelName="Date Of Birth"
            placeholder=""
            value={dateOfBirth}
            name="dateOfBirth"
            handleChange={handleChange}
          />

          <DivideWrapper>
            <Side>
              {" "}
              <FormTextInput
                labelName="City"
                placeholder="Enter city"
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
                placeholder="Enter country"
                width="100%"
                value={country}
                name="country"
                handleChange={handleChange}
              />
            </Side>
          </DivideWrapper>

          <DivideWrapper>
            <FormButton text="Previous" color="#0570fb" />
            <FormButton
              text="Next"
              backgroundColor="#0570fb"
              handleClick={routeToNextPage}
            />
          </DivideWrapper>
        </ResumeForm>
      </PersonalInfoWrapper>
    </PersonalInformationParent>
  );
};

export default PersonalInformation;
