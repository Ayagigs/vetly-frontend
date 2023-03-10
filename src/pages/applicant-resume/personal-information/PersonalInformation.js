import React, { useState } from "react";
import FormTextInput from "../../../components/custom-input/FormTextInput";
import {
  PersonalInformationParent,
  PersonalInfoWrapper,
  ResumeForm,
  Heading,
  DivideWrapper,
  Side,
  NavigateButton,
} from "./person.information.styles";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  contactAddress: "",
  city: "",
  country: "",
};

const PersonalInformation = () => {
  const [personalInfo, setPersonalInfo] = useState(initialState);
  const navigate = useNavigate();
  const routeToNextPage = () => {
    navigate("/applicant/resume/work-experience");
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
  } = personalInfo;
 
  return (
    <PersonalInformationParent>
      <PersonalInfoWrapper>
        <Heading>Personal Information</Heading>

        <ResumeForm>
          <FormTextInput
            labelName="First Name"
            placeholder="enter first name"
            value={firstName}
            name="firstName"
            handleChange={handleChange}
          />
          <FormTextInput
            labelName="Last Name"
            placeholder="enter last name"
            value={lastName}
            name="lastName"
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
          <FormTextInput
            labelName="Contact Address"
            placeholder="enter contact address"
            value={contactAddress}
            name="contactAddress"
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
            <NavigateButton>Previous</NavigateButton>
            <NavigateButton onClick={routeToNextPage}>Next</NavigateButton>
          </DivideWrapper>
        </ResumeForm>
      </PersonalInfoWrapper>
    </PersonalInformationParent>
  );
};

export default PersonalInformation;
